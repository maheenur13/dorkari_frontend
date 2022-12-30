import store from '@store';
import { setProduct } from './product.slice';

export const setProductFunc = async (data: any) => {
	store.dispatch(setProduct(data));
};
