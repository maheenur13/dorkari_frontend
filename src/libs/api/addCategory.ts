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

	getAllProperty = () => this.get<BR<any>>('all_property');
	postPreOrderData = (data) => this.post<BR<any>>('create_order_for_service',data);
	addPropertyBook = (payload) => this.post<BR<any>>('add_property_book',payload);
	getPropertyBookListByUser = (phoneNumber) => this.get<BR<any>>(`get_property_by_user/${phoneNumber}`);
	getOrdetDataById = (id) => this.get<BR<any>>(`single_order/${id}`);
	postAndDonePyament = (payload) => this.post<BR<any>>('submit_payment_service',payload);
	getAllOrdersByUser = (phoneNumber) => this.get<BR<any>>(`get_orders/${phoneNumber}`);
}

export const categoryAPI = new CategoryApi(process.env.apiUrl);
