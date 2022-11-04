import { FC } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import { authPopup, getUserState } from '@store/actions';
import { useDispatch } from 'react-redux';
import { ArrowLeftOutlined } from '@ant-design/icons';

export const ResetPass: FC = () => {
	const dispatch = useDispatch();
    const {
		popup: { isActive, type },
	} = useSelector(getUserState);

	return (
		<div>
			<div className='mb-3'>
			<Button icon={<ArrowLeftOutlined />}  type='primary' onClick={()=>dispatch(authPopup({ isActive: true, type: 'signin' }))} />
			</div>
			<Form.Item
				label="Old Password"
				name="oldPassword"
				rules={[{ required: true, message: 'Please input your Old Password!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="New Password"
				name="newPassword"
				rules={[{ required: true, message: 'Please input your New Password!' }]}
			>
				<Input.Password />
			</Form.Item>
			<Form.Item
				label="Confirm New Password"
				name="newPassword"
				rules={[{ required: true, message: 'Please input your Confirm New Password!' }]}
			>
				<Input.Password />
			</Form.Item>
			
		</div>
	);
};
