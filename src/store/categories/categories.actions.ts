import store from '@store';
import { setCategories } from './categories.slice';

export const setCategoriesData = async (data: CategoriesState): Promise<void> => {
	store.dispatch(setCategories(data));
};

type CategoriesState = {
	imageSrc: string;
	title: string;
	subCategories?: [];
}[];
