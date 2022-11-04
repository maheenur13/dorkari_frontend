import { UserComments } from '@components/Common';
import { Col, Progress, Rate, Row, Statistic } from 'antd';
import React from 'react';

export const Review = () => {
	return (
		<Row gutter={12}>
			<Col span={24}>
				<h3>Review of Gas Stove/Burner Repair in Gulshan</h3>
			</Col>
			<Col span={4} className="my-4">
				<Statistic title="Total Review" value={112893} />
				<Rate  value={3}  disabled />
			</Col>
			<Col className="my-4" span={6}>
				<Progress percent={30} />
				<Progress percent={50} status="active" />
				<Progress percent={70} status="exception" />
				<Progress percent={100} />
				<Progress percent={50} showInfo={false} />
			</Col>
			<Col span={24}>
				<UserComments />
			</Col>
		</Row>
	);
};
