import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@store';

const initialState: ProductState = {
	selectedProduct:{}
};

const slice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProduct: (state, action: PayloadAction<any>) => {
			state.selectedProduct = {...action.payload};
		},
		
	},
});

export default slice.reducer;

export const { setProduct } = slice.actions;

export const getProductState = (state: AppState): typeof initialState => state.product;

type ProductState = {
	selectedProduct:any;
};
