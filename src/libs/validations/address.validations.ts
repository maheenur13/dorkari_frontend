/* eslint-disable indent */
import { formatValidatorKey, isPhoneNumber } from '@utils/helpers';

export const addressValidate = (values: Partial<typeof initialValues>): Partial<typeof initialErrors> => {
	const errors: Partial<typeof initialErrors> = {};

	if (values && Object.keys(values).length > 0) {
		for (const [key, value] of Object.entries(values)) {
			if (key in initialErrors) {
				if (!value) {
					errors[key] = `${formatValidatorKey(key)} is required`;
				} else {
					if (key === 'phoneNumber' && !isPhoneNumber(String(value))) {
						errors.phoneNumber = 'Phone number is invalid';
					} else {
						errors[key] = null;
					}
				}
			}
		}
	}

	return errors;
};

const initialValues = {
	name: '',
	phoneNumber: '',
	region: '',
	city: '',
	area: '',
	house: '',
	road: '',
	deliveryInstruction: '',
	addressType: '',
	shipping: false,
	billing: false,
};
const initialErrors = {
	name: null,
	phoneNumber: null,
	region: null,
	city: null,
	area: null,
	house: null,
	road: null,
	addressType: null,
};
