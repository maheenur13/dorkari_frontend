/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseAPI } from './baseAPI';
import { BR } from './interfaces';
import { INewsType } from './interfaces/news';

class NewsAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}
	getTeslaNews = () =>
		this.get<BR<INewsType>>(
			'everything?q=tesla&from=2022-03-02&sortBy=publishedAt&apiKey=deaf26d1126640398a2d516f52214b08',
		);
}

export const newsAPI = new NewsAPI(process.env.newsAPI);
