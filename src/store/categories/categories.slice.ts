import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@store';

//initial state declaration
const initialState: StateType ={
	categoriesData:[],
};

// creating slice of category data
const slice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		//here we set all the data to categoires
		setCategories: (state, action: PayloadAction<CategoriesState>) => {
			state.categoriesData = [...action.payload];
		},
	},
});

export default slice.reducer;

export const { setCategories } = slice.actions;

export const getCategoriesState = (state: AppState): typeof initialState => state.categories;

//categories state type
type CategoriesState = {
	imageSrc: string;
	title: string;
	subCategories?: [];
}[];

type StateType = {
	categoriesData:CategoriesState;
}
