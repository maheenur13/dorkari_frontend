import { FC, useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';
import { BreadCrumbPanel } from '@components/Common/BreadCrumb';
import { Affix, Button, Card, Col, Modal, RadioChangeEvent, Row, Steps, Tabs, Tag } from 'antd';
import Icon, { arrowRightLine } from '@libs/icons';
import CartPanel from '../CartPanel';
import { useSelector } from 'react-redux';
import { authPopup, getUserState } from '@store/actions';
import { useDispatch } from 'react-redux';
const { Step } = Steps;

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

export const ServiceDetails: FC<any> = ({ service, currentServiceType }) => {
	const dispatch = useDispatch();
	const {profile} = useSelector(getUserState);
	const [top, setTop] = useState(90);
	const [tabPosition, setTabPosition] = useState<TabPosition>('left');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedService, setSelectedService] = useState({});

	const showModal = (el) => {
		setSelectedService(el);
		setIsModalOpen(true);
	};

	const handleOk = () => {
		if(profile.email) {
			setIsModalOpen(false);
		}
		else {
			dispatch(authPopup({ isActive: true, type: 'signin' }));
		}
		
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const changeTabPosition = (e: RadioChangeEvent) => {
		setTabPosition(e.target.value);
	};
	return (
		<Wrapper className="py-4 px-5" bgImage={service?.imageUrl}>
			<Row>
				<Col span={18}>
					<Row gutter={12}>
						<Col span={24} className="my-3">
							<BreadCrumbPanel title={service?.title} />
						</Col>
						<Col span={24}>
							<h2 className="text-white">{service?.title}</h2>
							<Tag className="px-4 py-1 mt-3" color="#16853b">
								<span style={{ fontSize: '1rem' }}>Rating 4.5</span>
							</Tag>
						</Col>
						<Col className="mt-3" span={24}>
							<Steps progressDot current={2} direction="vertical">
								{service?.topDetails?.map((el, idx) => (
									<Step key={idx} title={el} />
								))}
							</Steps>
						</Col>
					</Row>
				</Col>
				<Col span={6}>
					<Affix offsetTop={top} onChange={(affixed) => console.log(affixed)}>
						<CardWrapper style={{ width: 300 }}>
							<h5 className="text-white">{service?.title}</h5>
							<Tag className="px-4 py-1 mt-3" color="#16853b">
								<span style={{ fontSize: '1rem' }}>Rating 4.5</span>
							</Tag>
							<div>
								{currentServiceType?.map((el, idx) => {
									return (
										<TypeBox
											key={idx}
											onClick={() => showModal(el)}
											className="w-100 bg-dark border border-dark rounded  p-2 mt-3"
										>
											<Row>
												<Col span={18}>
													{' '}
													<span style={{ fontSize: '0.725rem' }}> {el?.title}</span>
												</Col>
												<Col span={6}>
													<Icon className="ms-3 " path={arrowRightLine} fill="#ffffff" />{' '}
												</Col>
											</Row>
										</TypeBox>
									);
								})}
							</div>
						</CardWrapper>
					</Affix>
				</Col>
			</Row>
			<Modal
				width={1000}
				okText="Purchase"
				cancelText="Cancel"
				title="Purchase Service"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<CartPanel selectedService={selectedService} />
			</Modal>
		</Wrapper>
	);
};

const Wrapper = styled.div<any>`
	background-image: url(${({ bgImage }) => bgImage});
	background-attachment: fixed;
	background-position: center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: relative;
	&:before {
		content: '';
		background-color: #0000007f;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	* {
		color: #ffffff !important;
	}
`;

const TypeBox = styled.div`
	cursor: pointer;
`;

const CardWrapper = styled(Card)`
	background-image: linear-gradient(137deg, #23a999 1%, #00a1ba 52%, #006597);
	border: none;
	border-radius: 5px;
`;
