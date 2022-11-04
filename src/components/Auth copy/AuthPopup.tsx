import { FC, useState } from 'react';
import { authPopup, getUserState } from '@store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { ResetPass } from './ResetPass';
import { Form, Modal, Button } from 'antd';
import AuthPage from './AuthPage';

export const AuthPopup: FC = () => {
	const dispatch = useDispatch();
	const {
		popup: { isActive, type },
	} = useSelector(getUserState);

	// console.log(isActive);

	const handleOk = () => {
		dispatch(authPopup({ isActive: false, type: null }));
		// setIsModalOpen(false);
	};

	const handleCancel = () => {
		dispatch(authPopup({ isActive: false, type: null }));
	};
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			<Modal
				title={type === 'signin' ? 'Sign In' : type === 'register' ? 'Create Account' : 'Reste Your Password'}
				open={isActive}
				onOk={handleOk}
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
						<Button type="primary" htmlType="submit">
							{type === 'signin' ? 'Sign In' : type === 'register' ? 'Register' : 'Reset'}
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};
