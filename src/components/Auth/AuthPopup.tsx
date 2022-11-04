import { FC, useState } from 'react';
import { authPopup, getUserState } from '@store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { ResetPass } from './ResetPass';
import { Form, Modal, Alert } from 'antd';
import AuthPage from './AuthPage';
import { authAPI } from '@libs/api';
import { Button, notifyAlert } from '@components/Common';
import moment from 'moment';
import { loggedInUser } from '@store/user/user.actions';

export const AuthPopup: FC = () => {
	const [isSuccess, setIsSuccess] = useState(false);
	const dispatch = useDispatch();

	const {
		popup: { isActive, type },
	} = useSelector(getUserState);

	const handleCancel = () => {
		dispatch(authPopup({ isActive: false, type: type }));
	};
	const onFinish = async (values: any) => {
		setIsSuccess(true);
		loggedInUser(values,type);
		setIsSuccess(false);
		
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			<Modal
				title={type === 'signin' ? 'Sign In' : type === 'register' ? 'Create Account' : 'Reste Your Password'}
				open={isActive}
				onCancel={handleCancel}
				width={400}
				footer={false}
			>
				<Form
					name="basic"
					labelCol={{ span: 16 }}
					wrapperCol={{ span: 24 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					layout="vertical"
				>
					{type === 'forgot-password' ? <ResetPass /> : <AuthPage />}
					<Form.Item className="text-end">
						<Button
							loading={isSuccess}
							type="primary"
							htmlType="submit"
							title={type === 'signin' ? 'Sign In' : type === 'register' ? 'Register' : 'Reset'}
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};
