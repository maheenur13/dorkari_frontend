import { Col, Row } from 'antd';
import Link from 'next/link';
import React, { FC } from 'react';

export const CategoryListComponent: FC<any> = ({ item }) => {
	// console.log('item', item);

	return (
		<Row>
			{item?.services?.map((el, idx) => {
				return (
					
                    <Col key={idx} span={24} className="bg-secondary rounded p-2 mb-1">
                        <Link href={`/services/${el?.slug}`}>
						<p className='text-white ms-3 mb-0'>{el?.title}</p>
                        </Link>
					</Col>
				);
			})}
		</Row>
	);
};
