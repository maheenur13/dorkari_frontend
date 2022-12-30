import user from './user/user.slice';
import product from './product/product.slice';
import { combineReducers } from 'redux';
import categories from './categories/categories.slice';

export const reducer = combineReducers( { user,categories,product });
