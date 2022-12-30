import React, { FC, useState } from 'react';
import { UserAddOutlined, LoginOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { SignIn } from './SignIn';
import { Register } from './Register';
import { useDispatch } from 'react-redux';
import { authPopup, getUserState } from '@store/actions';
import { authPageType } from '@utils/types';
import { useSelector } from 'react-redux';

const AuthPage: FC<any> = ({setDob}) => {
	const dispatch = useDispatch();
	const {
		popup: { isActive, type },
	} = useSelector(getUserState);

	// console.log(type);
	const onChange = (key: authPageType) => {
		// console.log(key);
		dispatch(authPopup({ isActive: true, type: key }));
	};
	return (
		<div>
			<Tabs
				onChange={onChange}
				activeKey={type}
				defaultActiveKey="signin"
				items={[
					{
						key: 'signin',
						title: 'Sign In',
						icon: LoginOutlined,
						page: <SignIn />,
					},
					{
						key: 'register',
						title: 'Register',
						icon: UserAddOutlined,
						page: <Register setDob={setDob} />,
					},
				].map((Icon, _) => {
					return {
						label: (
							<span>
								<Icon.icon />
								{Icon.title}
							</span>
						),
						key: Icon.key,
						children: Icon.page,
					};
				})}
			/>
		</div>
	);
};

export default AuthPage;
