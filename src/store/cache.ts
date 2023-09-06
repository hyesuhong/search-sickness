export default class CacheStore {
	private storeName: string;
	private cacheTime: number;
	private HEADER_CACHED_DATE = 'Cached-Date';

	constructor(storeName: string, cacheTime: number) {
		this.storeName = storeName;
		this.cacheTime = cacheTime;
	}

	async open() {
		const cacheStore = await caches.open(this.storeName);
		return cacheStore;
	}

	async match(url: string) {
		const cacheStore = await this.open();

		const cacheResponse = await cacheStore.match(url);
		if (!cacheResponse) return cacheResponse;

		const isExpired = this.isExpired(cacheResponse);
		if (isExpired) {
			await this.delete(cacheStore, url);
			return undefined;
		}

		return await cacheResponse.json();
	}

	async put(url: string, response: Response) {
		const cacheStore = await this.open();
		const newRes = await this.createResponseWithDate(response);

		cacheStore.put(url, newRes);
	}

	private async createResponseWithDate(response: Response) {
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

	private async delete(cacheStore: Cache, url: string) {
		return await cacheStore.delete(url);
	}
}
