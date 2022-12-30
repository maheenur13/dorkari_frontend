import { AuthPopup } from '@components/Auth';
import { authPopup, getUserState } from '@store/actions';
import { revokeAuthUser } from '@store/user/user.actions';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, message, Modal, Tag } from 'antd';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import type { MenuProps } from 'antd';
import ProfileComp from '@components/Proflile';

export const Header: FC = () => {
	const { profile } = useSelector(getUserState);
	const [showModal, setShowModal] = useState(false);
	const router = useRouter();
	const dispatch = useDispatch();

	console.log('profff', profile);

	const hndleOkay = ()=> {
		setShowModal(false);
	};
	const handleShowModal = ()=> {
		setShowModal(true);
	};
	const handleCancel = ()=> {
		setShowModal(false);
	};

	const handleLogin = () => {
		dispatch(authPopup({ isActive: true, type: 'signin' }));
	};

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		message.info('Click on left button.');
		console.log('click left button', e);
	};

	const handleMenuClick: MenuProps['onClick'] = (e: any) => {
		// message.info('Click on menu item.');
		console.log('click', e);
		if (e.key === 'logout') revokeAuthUser();
		else if (e.key === 'profile') setShowModal(true);
		else if (e.key === 'orders') router.push('/orders');
	};
	const items: MenuProps['items'] | any = [
		{
			label: 'Profile',
			key: 'profile',
			slug: '/profile',
			icon: <UserOutlined />,
		},
		{
			label: 'Orders',
			key: 'orders',
			slug: '/orders',
			icon: <UserOutlined />,
		},
		{
			label: 'logout',
			key: 'logout',
			icon: <LogoutOutlined />,
		},
	];

	const menuProps = {
		items,
		onClick: handleMenuClick,
	};

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
			sticky="top"
			className="px-4"
			style={{ zIndex: 999 }}
		>
			<Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => router.push('/')}>
				Dorkari
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ms-auto">
					<Nav.Link className="text-white"></Nav.Link>
					{profile.firstName ? (
						<Dropdown menu={menuProps}>
							<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
						</Dropdown>
					) : (
						<Nav.Link onClick={handleLogin} className="text-white" eventKey={2}>
							<Tag color="blue" className="px-3 py-1" style={{ fontSize: '0.825rem' }}>
								LOGIN
							</Tag>
						</Nav.Link>
					)}
				</Nav>
			</Navbar.Collapse>
			{/* </Container> */}
			<AuthPopup />
			<Modal title="User Profile" onCancel={handleCancel} onOk={hndleOkay} open={showModal} >
				<ProfileComp />
			</Modal>
		</Navbar>
	);
};
