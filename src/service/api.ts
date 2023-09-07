import type CacheStore from '../store/cache';

export default class Api {
	private BASE_URL: string;
	private cacheStorage?: CacheStore;

	constructor(baseUrl: string, cacheStorage?: CacheStore) {
		this.BASE_URL = baseUrl;
		this.cacheStorage = cacheStorage;
	}

	async fetch(endpoint: string) {
		const targetUrl = `${this.BASE_URL}${endpoint}`;

		if (!this.cacheStorage) {
			return this.getApiData(targetUrl);
		}

		const cacheData = await this.getCache(targetUrl);
		return cacheData ? cacheData : this.getApiData(targetUrl);
	}

	private async getCache(url: string) {
		if (!this.cacheStorage) return undefined;

		const cache = await this.cacheStorage.match(url);
		return cache;
	}

	private async getApiData(url: string) {
		const res = await fetch(url);

		console.info('calling api');

		if (this.cacheStorage) {
			const cloneRes = res.clone();
			this.cacheStorage.put(url, cloneRes);
		}

		return res.json();
	}
}
