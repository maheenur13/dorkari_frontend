import React, {useState,useEffect} from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ServicesLayout } from '@components/Layouts';
import { useSelector } from 'react-redux';
import { authPopup, getCategoriesState, getUserState } from '@store/actions';
import { getAllPropertyData } from '@store/categories/categories.actions';
import { Button, Col, Empty, Image, Modal, Row, message as Msg } from 'antd';
import NextImg from 'next/image';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { HtmlFormatter } from '@utils/helpers';
import { categoryAPI } from '@libs/api';
import moment from 'moment';
import { useDispatch } from 'react-redux';

const Properties: NextPage = () => {
	const {
		query: { name },
		pathname,
		push
	} = useRouter();
	const dispatch = useDispatch();
	const { allProperties } = useSelector(getCategoriesState);
	const { profile } = useSelector(getUserState);
	const [currentProperty,setCurrentProperty] = useState<any>({});
	
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(()=>{
		getAllPropertyData();
	},[]);

	useEffect(() => {
		if(allProperties.length > 0) {
			setCurrentProperty(allProperties.find((el)=>el.slug === `/${name}`));
		}
		
	}, [name]);


	const showModal = () => {
	  setIsModalOpen(true);
	};
  
	const handleOk = () => {
	  setIsModalOpen(false);
	};
  
	const handleCancel = () => {
	  setIsModalOpen(false);
	};

	const handleApplyClick = ()=> {	
		const {_id,...rest} = currentProperty;
		const {firstName,lastName,phoneNumber,...rest2} = profile;
		const payload = {
			propertyId:_id,
			firstName,
			lastName,
			userId:rest2._id,
			userPhoneNumber:phoneNumber,
			bookingData:moment().format('YYYY-MM-DD'),
			status:'pending',
			...rest,
		};
		submitBooking(payload);
		
	};
	const submitBooking = async (paylod)=> {
		if(profile.firstName) {
			try {
				const {data,success,message} = await categoryAPI.addPropertyBook(paylod);
				if(success) {
					Msg.success(message.toString());
					push('/orders');
				}
				else {
					Msg.error(message.toString());
				}
			} catch (error) {
				Msg.error(error.toString());
			}
		}
		else {
			dispatch(authPopup({ isActive: true, type: 'signin' }));
		}
		
	};

	console.log(currentProperty);

	return (
		<ServicesLayout>
			<Container className='p-3 border rounded my-3 bg-white'>
			{currentProperty?.imageUrl && <Row>
				<Col span={10}>
					<ImageWrapper>
					<Image src={currentProperty?.imageUrl} height={320} width={360}  />
					</ImageWrapper>
				</Col>
				<Col span={14} className='p-2'>
					<h5>{currentProperty.title}</h5>
					<h6>BDT {currentProperty.price}</h6>
					<p>{currentProperty.location}</p>
					<div className='my-3'>
					<HtmlFormatter data={currentProperty.details} />
					</div>
					<div>
						<Button className='me-3' type='primary' onClick={showModal}>Call</Button>
						<Button  className='me-3' onClick={showModal}>Send Email</Button>
						<Button className='bg-dark text-white border-dark'  onClick={handleApplyClick}>Apply For Book</Button>
					</div>
				</Col>
			</Row>}
			</Container>
			<Modal title='Contact Information' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				{currentProperty?.contactPhone ?<div>
					<h6><label>Phone: </label>{currentProperty?.contactPhone}</h6>
					<h6><label>Email: </label>{currentProperty?.contactEmail || 'Not found!'}</h6>
				</div> : <Empty/>}
			</Modal>
		</ServicesLayout>
	);
};

export default Properties;

const ImageWrapper = styled.div`
	max-height: 320px;
	overflow: hidden;
	max-width: 350px;
	border-radius: 4px;
`;
