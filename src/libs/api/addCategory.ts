/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseAPI } from './baseAPI';
import { BR } from './interfaces';

class CategoryApi extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	getCategory = () => this.get<BR<any>>('allCategories');
	getAllServiceType = () => this.get<BR<any>>('all_service_type');
	deleteCategory = (id:any)=> this.delete<BR<any>>('delete_category',id);
}

export const categoryAPI = new CategoryApi(process.env.apiUrl);
