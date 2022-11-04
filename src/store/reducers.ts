import user from './user/user.slice';
import { combineReducers } from 'redux';
import categories from './categories/categories.slice';

export const reducer = combineReducers( { user,categories });
