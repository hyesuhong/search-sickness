export default class CacheStore {
	private storeName: string;
	private cacheTime: number;
	private HEADER_CACHED_DATE = 'Cached-Date';

	constructor(storeName: string, cacheTime: number) {
		this.storeName = storeName;
		this.cacheTime = cacheTime;
	}

	async open() {
		const casheStore = await caches.open(this.storeName);
		return casheStore;
	}

	async match(url: string) {
		const casheStore = await this.open();

		const cacheResponse = await casheStore.match(url);
		if (!cacheResponse) return cacheResponse;

		const isExpired = this.isExpired(cacheResponse);
		if (isExpired) {
			await this.delete(casheStore, url);
			return undefined;
		}

		return await cacheResponse.json();
	}

	async add(response: Response) {
		const resClone = response.clone();
		const resBody = await resClone.blob();
		const resHeaders = new Headers(resClone.headers);
		resHeaders.append(this.HEADER_CACHED_DATE, new Date().toISOString());

		return new Response(resBody, {
			...resClone,
			headers: resHeaders,
		});
	}

	private isExpired(response: Response) {
		const cachedDate = response.headers.get(this.HEADER_CACHED_DATE);
		if (!cachedDate) return false;

		const cachedMS = new Date(cachedDate).getTime();
		const today = new Date().getTime();

		return today - cachedMS > this.cacheTime;
	}

	private async delete(casheStore: Cache, url: string) {
		return await casheStore.delete(url);
	}
}
