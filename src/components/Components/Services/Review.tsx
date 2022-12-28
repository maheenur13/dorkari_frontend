import { UserComments } from '@components/Common';
import { Col, Progress, Rate, Row, Statistic } from 'antd';
import React, {FC} from 'react';

export const Review:FC<any> = ({data}) => {
	return (
		<Row gutter={12}>
			<Col span={24}>
				{/* <h3>{data?.title}</h3> */}
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
