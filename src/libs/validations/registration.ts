/* eslint-disable indent */
import { regInitialErrors, regInitialValues } from '@utils/constants';
import { formatValidatorKey, isPhoneNumber } from '@utils/helpers';

export const regValidation = (values: Partial<typeof regInitialValues>): Partial<typeof regInitialErrors> => {
	const errors: Partial<typeof regInitialErrors> = {};

	if (values && Object.keys(values).length > 0) {
		for (const [key, value] of Object.entries(values)) {
			if (key in regInitialErrors) {
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
