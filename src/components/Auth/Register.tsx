import { FC } from 'react';
import { Button, Checkbox, Form, Input, DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { authPopup, getUserState } from '@store/actions';
import type { DatePickerProps } from 'antd';
import moment from 'moment';
import { useSelector } from 'react-redux';
import type { RangePickerProps } from 'antd/es/date-picker';

export const Register: FC = () => {
	const dispatch = useDispatch();
	const {
		popup: { isActive, type },
	} = useSelector(getUserState);

	const handleDobChange: DatePickerProps['onChange'] = (date, dateString) => {
		console.log(moment(date));
		console.log(dateString);
	};

	const disabledDate: RangePickerProps['disabledDate'] = (current) => {
		// Can not select days before today and today
		const customDate = moment('2010-04-01');
console.log('customDate',customDate);

		return current && current > customDate;
	};

	return (
		<>
			{type === 'register' && (
				<>
					<Form.Item
						className="w-100"
						label="Phone Number"
						name="phoneNumber"
						rules={[{ required: true, message: 'Please input your Phone Number!' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="w-100"
						label="Date Of Birth"
						name="dateOfBirth"
						rules={[{ required: true, message: 'Please select your DOB!' }]}
					>
						<DatePicker disabledDate={disabledDate} className="w-100" onChange={handleDobChange} />
					</Form.Item>

					<Form.Item
						className="w-100"
						label="Password"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
						hasFeedback
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						className="w-100"
						label="Confirm Password"
						name="confirmPassword"
						rules={[
							{ required: true, message: 'Please input your confirm password!' },
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve();
									}
									return Promise.reject(
										new Error('The two passwords that you entered do not match!'),
									);
								},
							}),
						]}
						dependencies={['password']}
						hasFeedback
					>
						<Input.Password />
					</Form.Item>

					<Button type="link" onClick={() => dispatch(authPopup({ isActive: true, type: 'signin' }))}>
						Already Have an Account?
					</Button>
				</>
			)}
		</>
	);
};
