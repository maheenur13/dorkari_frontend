import { ServicesLayout } from '@components/Layouts';
import { Col, Row, Tabs } from 'antd';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { ServiceDetails } from '@components/Components';
import { ServiceDetailsNavigation } from '@components/Components/Services';
import { useSelector } from 'react-redux';
import { getCategoriesState } from '@store/actions';
import { useRouter } from 'next/router';
import { getAllServiceType } from '@store/categories/categories.actions';

const EachService: NextPage = () => {
	const { allServices,allServiceType } = useSelector(getCategoriesState);
	const [service, setService] = useState(null);
	const [currentServiceType,setCurrentServiceType] = useState([]);

	const {
		query: { name },
		pathname
	} = useRouter();
	const servicesData = [
		{
			title: 'Overview',
			data: {
				items: [
					{
						title: 'Service Features',
						lists: [
							'Well-trained Workmen',
							'7 Days Service Warranty',
							'Doorstep Service',
							'Safety Assurance',
						],
					},
					{
						title: 'Payment',
						lists: ['After service completion you have to pay through Sheba.xyz app or Cash on Delivery.'],
					},
					{
						title: 'Warranty',
						lists: [
							'Warranty on consumables and parts will be as per manufacturer',
							'7 Days of service warranty will be given by Sheba.xyz',
						],
					},
					{
						title: 'Pricing Terms',
						lists: [
							'Only Service Charge',
							'Excludes additional components and parts (if used)',
							'Excludes any transportation cost (if applicable)',
						],
					},
					{
						title: 'Warranty',
						lists: [
							'Warranty on consumables and parts will be as per manufacturer',
							'7 Days of service warranty will be given by Sheba.xyz',
						],
					},
					{
						title: 'Pricing Terms',
						lists: [
							'Only Service Charge',
							'Excludes additional components and parts (if used)',
							'Excludes any transportation cost (if applicable)',
						],
					},
				],
			},
		},
		{
			title: 'Reviews',
			data: {
				items: [
					{
						title: 'Service Features',
						lists: [
							'Well-trained Workmen',
							'7 Days Service Warranty',
							'Doorstep Service',
							'Safety Assurance',
						],
					},
					{
						title: 'Payment',
						lists: ['After service completion you have to pay through Sheba.xyz app or Cash on Delivery.'],
					},
					{
						title: 'Warranty',
						lists: [
							'Warranty on consumables and parts will be as per manufacturer',
							'7 Days of service warranty will be given by Sheba.xyz',
						],
					},
					{
						title: 'Pricing Terms',
						lists: [
							'Only Service Charge',
							'Excludes additional components and parts (if used)',
							'Excludes any transportation cost (if applicable)',
						],
					},
				],
			},
		},
		{
			title: 'Details',
			data: {
				items: [],
			},
		},
	];

	useEffect(() => {
		if(allServices.length > 0) {
			setService(allServices.find((el)=>el.slug === `/${name}`));
		}
		getAllServiceType();
	}, [name]);

	useEffect(()=>{
		if(allServiceType.length > 0 && service) {
			setCurrentServiceType(allServiceType.filter((el)=>el.serviceName === service?.title));
		}
	},[service]);
	console.log('lol',service);
	console.log('currentServiceType',currentServiceType);
	console.log('allServices',allServices);
	console.log('allServiceType',allServiceType);
	
	return (
		<ServicesLayout>
			{/* <Container className="bg-white  p-0"> */}
			<ServiceDetails service={service} currentServiceType={currentServiceType} />
			<Row className="m-4">
				<Col span={24}>
					<div className="bg-white rounded px-2 py-5 shadow">
						<Tabs
							tabPosition="left"
							items={servicesData.map((el, i) => {
								// const id = String(i + 1);
								return {
									label: `${el.title}`,
									key: `${i + 1}`,
									children: <ServiceDetailsNavigation key={i} item={el} service={service} />,
								};
							})}
						/>
					</div>
				</Col>
			</Row>
			{/* </Container> */}
		</ServicesLayout>
	);
};

export default EachService;
