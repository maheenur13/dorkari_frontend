import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import { FC } from 'react';
import { CardComp } from './CardComp';

export const BanneredComp: FC<any> = ({ item }) => {
	console.log(item);

	return (
		<Row>
			<Col span={10}>
				<Image src={item?.sideImg} width={200} height={300} layout="responsive" />
			</Col>
			<Col span={14}>
				<p>Zdrop Offers</p>
				<h2>{item?.title}</h2>
				<p>Only for you</p>
				<Button className="my-2">{item?.shopMore}</Button>
				<p>{item?.shopUp}</p>
				<Row gutter={24}>
					{item?.items?.map((ell, idx) => (
						<Col span={7} className="border rounded shadow m-1 shadow-sm p-4" key={idx}>
							<CardComp type="image" item={ell} />
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	);
};
