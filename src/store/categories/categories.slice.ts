import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@store';

//initial state declaration
const initialState: StateType ={
	categoriesData:[],
	allServices:[],
	allServiceType:[],
	allProperties:[],
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
		setAllServices: (state, action: PayloadAction<ServiceState>) => {
			state.allServices = [...action.payload];
		},
		setAllServiceType: (state, action: PayloadAction<any>) => {
			state.allServiceType = [...action.payload];
		},
		setAllProperties: (state, action: PayloadAction<any>) => {
			state.allProperties = [...action.payload];
		},

		
	},
});

export default slice.reducer;

export const { setCategories,setAllServices,setAllServiceType, setAllProperties } = slice.actions;

export const getCategoriesState = (state: AppState): typeof initialState => state.categories;

//categories state type
type CategoriesState = {
	imageUrl: string;
	iconUrl?:string;
	title: string;
	services?: [];
	_id:string;
}[];

type StateType = {
	categoriesData:CategoriesState;
	allServices:ServiceState;
	allServiceType:any[];
	allProperties:any[];
}

type ServiceState = {
    categoryId:string;
    details:string;
	imageUrl: string;
    faq:string;
	title: string;
	slug: string;
    topDetails:[];
}[];
