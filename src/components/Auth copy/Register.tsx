import { FC } from 'react';
import { Button, Checkbox, Form, Input, DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { authPopup } from '@store/actions';
import type { DatePickerProps } from 'antd';
import moment from 'moment';

export const Register: FC = () => {
    const dispatch = useDispatch();

    const handleDobChange:DatePickerProps['onChange'] = (date, dateString)=> {
        console.log(moment(dateString));
    };

	return (
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
				 <DatePicker className='w-100' onChange={handleDobChange} />
			</Form.Item>

			<Form.Item
				className="w-100"
				label="Password"
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>
			<Form.Item
				className="w-100"
				label="Confirm Password"
				name="confirmPassword"
				rules={[{ required: true, message: 'Please input your confirm password!' }]}
			>
				<Input.Password />
			</Form.Item>

			
			<Button type="link" onClick={() => dispatch(authPopup({ isActive: true, type: 'signin' }))}>
				Already Have an Account?
			</Button>
		</>
	);
};
