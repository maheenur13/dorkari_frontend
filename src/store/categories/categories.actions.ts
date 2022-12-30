import { categoryAPI } from '@libs/api';
import store from '@store';
import { setAllProperties, setAllServices, setAllServiceType, setCategories } from './categories.slice';

export const setCategoriesData = async (data: CategoriesState): Promise<void> => {
	store.dispatch(setCategories(data));
	setAllServicesFunc(data);
};

export const setAllServicesFunc = async (data:CategoriesState) => {
	const serviceArray = [];
	[...data].map((el,idx)=> {
		 el?.services?.map((service)=> serviceArray.push(service)
		 );
	});
	store.dispatch(setAllServices(serviceArray));
};

export const getAllServiceType = async ()=> {
	try {
		const { data, success, message } = await categoryAPI.getAllServiceType();
		if (success) {
			if (data?.length > 0) {
				// alert('ok');
				store.dispatch(setAllServiceType(data));
			}
			else {
				store.dispatch(setAllServiceType([]));
			}
		} else {
			store.dispatch(setAllServiceType(data));
		}
	} catch (error) {
		// swalError(error);
	}
};
export const getAllPropertyData = async ()=> {
	try {
		const { data, success, message } = await categoryAPI.getAllProperty();
		if (success) {
			if (data?.length > 0) {
				// alert('ok');
				store.dispatch(setAllProperties(data));
			}
			else {
				store.dispatch(setAllProperties([]));
			}
		} else {
			store.dispatch(setAllProperties(data));
		}
	} catch (error) {
		alert(error);
	}
};
type CategoriesState = {
	imageUrl: string;
	title: string;
	services?: [];
	_id:string;
}[];
