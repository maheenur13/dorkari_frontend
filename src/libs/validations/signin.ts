/* eslint-disable indent */
import { loginInitialErrors, loginInitialValues } from '@utils/constants';
import { formatValidatorKey, isPhoneNumber } from '@utils/helpers';

export const loginValidation = (values: Partial<typeof loginInitialValues>): Partial<typeof loginInitialErrors> => {
	const errors: Partial<typeof loginInitialErrors> = {};

	if (values && Object.keys(values).length > 0) {
		for (const [key, value] of Object.entries(values)) {
			if (key in loginInitialErrors) {
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
