import { notifyAlert } from '@components/Common';
import { authAPI } from '@libs/api';
import store from '@store';
import { authPopup, authSignIn, authSignOut } from '@store/actions';
import moment from 'moment';
import { destroyCookie, setCookie } from 'nookies';

// const dispatch = useDispatch();
/**
 * Set app user if credentials are valid
 * @param data
 */
export const setAuthUser = async (data: IAuth): Promise<void> => {
	const { token, ...rest } = data;
	store.dispatch(authSignIn(rest));
	store.dispatch(authPopup({ isActive: false, type: null }));
};

export const loggedInUser = async (values: any, type: string) => {
	if (type === 'signin') {
		try {
			const { data, success, message } = await authAPI.login(values);
			if (success) {
				console.log(data);
				
				notifyAlert('success', 'User Logged In Successfully!');
				setAuthUser(data);
				// store.dispatch(authPopup({ isActive: false, type: null }));
			} else {
				notifyAlert('error', message);
			}
		} catch (error) {
			notifyAlert('error', error, error);
		}
	} else if (type === 'register') {
		const payload = { ...values };
		console.log(payload);
		
		payload.dateOfBirth = moment(values.dateOfBirth).format('YYYY-MM-DD');
		// console.log(payload);
		try {
			const { data, success, message } = await authAPI.userRegister(payload);
			if (success) {
				console.log(data);

				notifyAlert('success', 'Account Created Successfully!');
				store.dispatch(authPopup({ isActive: false, type: 'register' }));
			} else {
				notifyAlert('error', message);
			}
		} catch (error) {
			notifyAlert('error', error, error);
		}
	}
};

export const getUserData = async (phoneNumber: string) => {
	try {
		const { data, success, message } = await authAPI.userDetails(phoneNumber);
		if (success) {
			// console.log(data);
			notifyAlert('success', 'You are logged in');
			setAuthUser(data);
			// store.dispatch(authPopup({ isActive: false, type: null }));
		} else {
			notifyAlert('error', message);
		}
	} catch (error) {
		notifyAlert('error', error, error);
	}
};

/**
 * Revoke app user access
 */
export const revokeAuthUser = (): Promise<void> => {
	return new Promise((resolve) => {
		destroyCookie(null, 'token');
		store.dispatch(authSignOut());
		resolve();
	});
};

/**
 * Set global data such as `cart count`, `notifications`
 */

export interface GlobeData {
	user: IAuth;
}
export interface IAuth {
	id: string;
	_id:string;
	firstName: string;
	lastName: string;
	avatarURL?: string;
	phoneNumber?: string;
	dateOfBirth: Date;
	token: string;
	email?: string;
	age:number;
}
