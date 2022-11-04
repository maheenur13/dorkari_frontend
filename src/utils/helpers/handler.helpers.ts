import { KeyboardEvent } from 'react';

export const handleNumberOnly = (e: KeyboardEvent<HTMLInputElement>): void | boolean => {
	const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace', 'Tab'];
	const { key } = e;
	if (keys.find((e) => e === key)) return true;
	e.preventDefault();
};

export const generateUid = () => {
	const head = Date.now().toString(36);
	const tail = Math.random().toString(36).substring(2);
	return head + tail;
};
