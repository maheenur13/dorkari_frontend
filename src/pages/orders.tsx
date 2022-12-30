import { MainLayout } from '@components/Layouts';
import { categoryAPI } from '@libs/api';
import { getUserState } from '@store/actions';
import { Col, Empty, Row, Tabs } from 'antd';
import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Orders: NextPage = () => {
	const { profile } = useSelector(getUserState);
	const [orderLists, setOrderLists] = useState([]);
	const [bookingList, setBookingList] = useState([]);

	useEffect(() => {
		if (profile.firstName) {
			getAllListData();
            getAllBookings();
		}
	}, []);

	const getAllListData = async () => {
		try {
			const { data, success, message } = await categoryAPI.getAllOrdersByUser(profile.phoneNumber);
			if (success) {
				setOrderLists(data);
			}
		} catch (error) {
			alert(error);
		}
	};
	const getAllBookings = async () => {
		try {
			const { data, success, message } = await categoryAPI.getPropertyBookListByUser(profile.phoneNumber);
			if (success) {
                console.log('datatat',data);
                setBookingList(data);
				// setOrderLists(data);
			}
		} catch (error) {
			alert(error);
		}
	};

	console.log(orderLists);

	const onChange = (key: string) => {
		console.log(key);
        if(key === '2') {
            getAllBookings();

        }
        else {
            getAllListData();
        }
	};

	return (
		<MainLayout>
			<Container className="my-3 p-3 bg-white rounded">

				<Tabs
					defaultActiveKey="1"
					onChange={onChange}
					items={[
						{
							label: 'Service Orders',
							key: '1',
							children: (
								<>
									{orderLists?.length > 0 ? (
										orderLists.map((el, idx) => {
											return (
												<ListWrapper key={idx}>
													<Row>
														<Col span={10}>
															<h6 style={{ fontSize: '0.875rem' }}>{el.serviceName}</h6>
														</Col>
														<Col span={14} className="text-end">
															<h6 style={{ fontSize: '0.725rem' }}>
																{' '}
																BDT <span>{el.price}</span>{' '}
															</h6>
														</Col>
														<Col span={24} className="text-start">
															<h6 style={{ fontSize: '0.725rem' }}>
																Category: <span>{el.title}</span>{' '}
															</h6>
														</Col>
														<Col span={14} className="text-start">
															<h6 style={{ fontSize: '0.725rem' }}>
																status: <span className="text-info">{el.status}</span>{' '}
															</h6>
														</Col>
														<Col span={14} className="text-start">
															<h6 style={{ fontSize: '0.725rem' }}>
																Payment Method:{' '}
																<span className="text-info">
																	{(
																		<span className="text-success">
																			{el.paymentMethod}
																		</span>
																	) || (
																		<span className="text-danger">
																			Not Selected Yet!
																		</span>
																	)}
																</span>{' '}
															</h6>
														</Col>
													</Row>
												</ListWrapper>
											);
										})
									) : (
										<Empty />
									)}
								</>
							),
						},
						{
							label: 'Property Orders',
							key: '2',
							children: 								<>
                            {bookingList?.length > 0 ? (
                                bookingList.map((el, idx) => {
                                    return (
                                        <ListWrapper key={idx}>
                                            <Row>
                                                <Col span={10}>
                                                    <h6 style={{ fontSize: '0.875rem' }}>{el.title}</h6>
                                                </Col>
                                                <Col span={14} className="text-end">
                                                    <h6 style={{ fontSize: '0.725rem' }}>
                                                        {' '}
                                                        BDT <span>{el.price}</span>{' '}
                                                    </h6>
                                                </Col>
                                                <Col span={24} className="text-start">
                                                    <h6 style={{ fontSize: '0.725rem' }}>
                                                        Booking Data: <span>{el.bookingData}</span>{' '}
                                                    </h6>
                                                </Col>
                                                <Col span={14} className="text-start">
                                                    <h6 style={{ fontSize: '0.725rem' }}>
                                                        status: <span className="text-info">{el.status}</span>{' '}
                                                    </h6>
                                                </Col>
                                                <Col span={14} className="text-start">
                                                    <h6 style={{ fontSize: '0.725rem' }}>
                                                        Location:{' '}
                                                        <span className="text-warning">
                                                            {el.location}
                                                        </span>{' '}
                                                    </h6>
                                                </Col>
                                            </Row>
                                        </ListWrapper>
                                    );
                                })
                            ) : (
                                <Empty />
                            )}
                        </>,
						},
					]}
				/>
			</Container>
		</MainLayout>
	);
};
const ListWrapper = styled.div`
	padding: 1rem;
	background-color: #e0e0e0;
	border-radius: 4px;
	margin: 8px 8px;
`;
export default Orders;
