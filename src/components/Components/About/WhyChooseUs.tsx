import { Card, Col, Image, Row } from 'antd';
import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { WeiboCircleOutlined } from '@ant-design/icons';

export const WhyChooseUs: FC = () => {
	return (
		<Wrapper>
			<Container>
				<p>---- WHY CHOOSE US?</p>
				<h1 className="mt-3">Because We Care About Your Safety</h1>
				<Row className='my-3 justify-content-between' gutter={12}>
					<Col span={11}>
						<Row gutter={12}>
							<Col span={12} className='mb-3'>
								<Card className='shadow-sm py-2'>
									<div className="d-flex align-items-center">
										<div>
											<WeiboCircleOutlined style={{ fontSize: '2rem',marginRight:'10px' }} />
										</div>
										<h6>Ensuring Marks</h6>
									</div>
								</Card>
							</Col>
							<Col span={12}>
								<Card className='shadow-sm py-2'>
									<div className="d-flex align-items-center">
										<div>
											<WeiboCircleOutlined style={{ fontSize: '2rem',marginRight:'10px' }} />
										</div>
										<h6>Ensuring Marks</h6>
									</div>
								</Card>
							</Col>
							<Col span={12} className='mb-3 '>
								<Card className='shadow-sm py-2'>
									<div className="d-flex align-items-center">
										<div>
											<WeiboCircleOutlined style={{ fontSize: '2rem',marginRight:'10px' }} />
										</div>
										<h6>Ensuring Marks</h6>
									</div>
								</Card>
							</Col>
							<Col span={12}>
								<Card className='shadow-sm py-2'>
									<div className="d-flex align-items-center">
										<div>
											<WeiboCircleOutlined style={{ fontSize: '2rem',marginRight:'10px' }} />
										</div>
										<h6>Ensuring Marks</h6>
									</div>
								</Card>
							</Col>
						</Row>
					</Col>
                    <Col span={13} >
                       <div className='overflow-hidden rounded w-100 text-center'>
                       <Image src='/images/why-bg.webp' alt='bg-image' height={210} className='rounded'  />
                       </div>
                    </Col>
				</Row>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 2rem 1rem;
    margin-bottom: 1rem;
	background-color: #ffffff;
	p {
		margin: 0;
		font-size: 0.825rem;
		font-weight: 500;
	}
	h1 {
		font-size: 1.37rem;
		text-transform: uppercase;
		font-weight: 700;
	}
`;
