import { AuthPopup } from '@components/Auth';
import { authPopup } from '@store/actions';
import { Tag } from 'antd';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export const Header: FC = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(authPopup({ isActive: true, type: 'signin' }));
	};
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className='px-4' style={{ zIndex: 999 }}>
				<Navbar.Brand style={{cursor:'pointer'}} onClick={()=>router.push('/')} >Dorkari</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link className="text-white" >
						{/* <Button className='text-white border border-white' type='' >ALL SERVICES</Button> */}
						</Nav.Link>
						<Nav.Link onClick={handleLogin} className="text-white" eventKey={2}>
						<Tag color="blue" className='px-3 py-1' style={{fontSize:'0.825rem'}}>LOGIN</Tag>
							{/* <Button className='text-white border border-white' type='ghost' >LOGIN</Button> */}
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			{/* </Container> */}
			<AuthPopup />
		</Navbar>
	);
};
