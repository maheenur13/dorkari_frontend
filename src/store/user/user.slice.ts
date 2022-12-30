import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@store';

const initialState: IUserState = {
	popup: {
		isActive: false,
		type: null,
	},
	profile: {
		id: null,
		_id: null,
		age:null,
		firstName: null,
		lastName: null,
		avatarURL: '/images/avatar.jpg',
		phoneNumber: null,
	},
	isAuthenticate: false,
};

const slice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		authPopup: (state, action: PayloadAction<IPopup>) => {
			console.log(action.payload);
			state.popup = { ...action.payload };
		},
		authSignIn: (state, action: PayloadAction<IProfile>) => {
			state.profile = { ...action.payload };
			state.isAuthenticate = true;
		},
		authSignOut: (state) => {
			for (const [key, value] of Object.entries(initialState)) {
				if (value !== null && typeof value === 'object') {
					state[key] = { ...value };
				} else {
					state[key] = value;
				}
			}
		},
		authUpdateAvatar: (state, action: PayloadAction<IProfile['avatarURL']>) => {
			state.profile.avatarURL = action.payload;
		},
		authUpdateProfile: (state, action: PayloadAction<Partial<IProfile>>) => {
			for (const [key, value] of Object.entries(action.payload)) {
				state.profile[key] = value;
			}
		},
	},
});

export default slice.reducer;

export const { authPopup, authSignIn, authSignOut, authUpdateAvatar, authUpdateProfile } = slice.actions;

export const getUserState = (state: AppState): typeof initialState => state.user;

type IPopup = {
	isActive?: boolean;
	type?: 'register' | 'signin' | 'forgot-password';
};
type IProfile = {
	id: string;
	_id: string;
	firstName: string;
	lastName: string;
	avatarURL?: string;
	phoneNumber?: string;
	email?: string;
	age:number;
};
type IUserState = {
	popup: IPopup;
	profile: IProfile;
	isAuthenticate: boolean;
};
