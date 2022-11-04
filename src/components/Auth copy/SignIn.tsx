import { FC } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { authPopup, getUserState } from '@store/actions';
import { useSelector } from 'react-redux';

export const SignIn: FC = () => {
	const dispatch = useDispatch();

	return (
		<>
			<Form.Item
				className="w-100"
				label="Phone Number"
				name="phoneNumber"
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				className="w-100"
				label="Password"
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item className="w-100" name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 16 }}>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>
			<Button type="link" onClick={() => dispatch(authPopup({ isActive: true, type: 'forgot-password' }))}>
				Forget Password?
			</Button>
		</>
	);
};
