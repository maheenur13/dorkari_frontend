import { Col, Row, Tabs } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';
import { CategoryListComponent } from './CategoryListComponent';

export const CategoryDetails: FC<any> = ({ categoryData }) => {
	const carouselData: any = [
		{
			imageSrc: '/images/categories/freeze.webp',
			title: 'Appliance Repair',
			subCategories: [],
		},
		{
			imageSrc: '/images/categories/freeze.webp',
			title: 'Shifting',
			subCategories: [],
		},
		{
			imageSrc: '/images/categories/freeze.webp',
			title: 'Cleaning & Pest Control',
			subCategories: [],
		},
		{
			imageSrc: '/images/categories/freeze.webp',
			title: 'Electronics & Gadgets Repair',
			subCategories: [],
		},
	];
	console.log(categoryData);

	
	return (
		<Wrapper>
			<Tabs
				tabPosition="left"
				items={carouselData.map((el, i) => {
					return {
						label: `${el.title}`,
						key: i,
						children:<CategoryListComponent item={el} />,
					};
				})}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
    /* max-height: 350px;
    overflow-y: auto; */
`;
