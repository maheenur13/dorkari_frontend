import { BanneredComp, CarouselComp } from '@components/Demo';
import { productsData } from '@utils/constants/demoData';
import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const DemoPage = () => {
	const [allProducts, setAllProducts] = useState([]);

	useEffect(() => {
		setAllProducts([...productsData.allProducts]);
	}, []);

	return (
		<Container className="border p-5 my-2  shadow shadow-sm bg-white">
			{allProducts?.map((el, idx) => {
				return (
					<Fragment key={idx}>
						{el.type === 'bannered_section' ? (
							<BanneredComp item={el} />
						) : el.type === 'carousel' ? (
							<CarouselComp item={el} />
						) : null}
					</Fragment>
				);
			})}
		</Container>
	);
};

export default DemoPage;
