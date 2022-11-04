import { FC, useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { BreadCrumbPanel } from '@components/Common/BreadCrumb';
import { Affix, Button, Card, Col, RadioChangeEvent, Row, Steps, Tabs, Tag } from 'antd';
import Icon, { arrowRightLine } from '@libs/icons';
const { Step } = Steps;

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

export const ServiceDetails: FC = () => {
	const [top, setTop] = useState(90);
	const [tabPosition, setTabPosition] = useState<TabPosition>('left');

	const changeTabPosition = (e: RadioChangeEvent) => {
		setTabPosition(e.target.value);
	};
	return (
		<Wrapper className="py-4 px-5">
			<Row>
				<Col span={18}>
					<Row gutter={12}>
						<Col span={24} className="my-3">
							<BreadCrumbPanel />
						</Col>
						<Col span={24}>
							<h2 className="text-white">Gas Stove/Burner Repair</h2>
							<Tag className="px-4 py-1 mt-3" color="#16853b">
								<span style={{ fontSize: '1rem' }}>Rating 4.5</span>
							</Tag>
						</Col>
						<Col className="mt-3" span={24}>
							<Steps progressDot current={2} direction="vertical">
								<Step title="Expertise" description="This is a description. This is a description." />
								<Step title="Warranty" description="This is a description. This is a description." />
								<Step title="Reliable" description="This is a description. This is a description." />
							</Steps>
						</Col>
					</Row>
				</Col>
				<Col span={6}>
					<Affix offsetTop={top} onChange={(affixed) => console.log(affixed)}>
						<CardWrapper style={{ width: 300 }}>
							<h5 className="text-white">Gas Stove/Burner Repair</h5>
							<Tag className="px-4 py-1 mt-3" color="#16853b">
								<span style={{ fontSize: '1rem' }}>Rating 4.5</span>
							</Tag>
							<div >
								<Button type='primary' className='w-100 bg-dark border border-dark rounded d-flex justify-content-around align-items-center py-3 mt-3' >Stove/Burner Installation <Icon className='ms-3 ' path={arrowRightLine} fill='#ffffff' /> </Button>
								<Button type='primary' className='w-100 bg-dark border border-dark rounded d-flex justify-content-around align-items-center py-3 mt-3' >Stove/Burner Installation <Icon className='ms-3 ' path={arrowRightLine} fill='#ffffff' /> </Button>
								<Button type='primary' className='w-100 bg-dark border border-dark rounded d-flex justify-content-around align-items-center py-3 mt-3' >Stove/Burner Installation <Icon className='ms-3 ' path={arrowRightLine} fill='#ffffff' /> </Button>
							</div>
						</CardWrapper>
					</Affix>
				</Col>
			</Row>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-image: url('/images/categories/stove_big.jpg');
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

const CardWrapper = styled(Card)`
	background-image: linear-gradient(137deg, #23a999 1%, #00a1ba 52%, #006597);
	border: none;
	border-radius: 5px;
`;
