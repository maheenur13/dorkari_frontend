import { ServicesLayout } from '@components/Layouts';
import { Col, Row, Tabs } from 'antd';
import { NextPage } from 'next';
import React from 'react';
import { ServiceDetails } from '@components/Components';
import { ServiceDetailsNavigation } from '@components/Components/Services';

const EachService: NextPage = () => {
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
	return (
		<ServicesLayout>
			{/* <Container className="bg-white  p-0"> */}
			<ServiceDetails />
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
									children: <ServiceDetailsNavigation key={i} item={el} />,
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
