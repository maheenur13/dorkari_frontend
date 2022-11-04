import { CardTitle, Carousel } from '@components/Common';
import { getCategoriesState } from '@store/actions';
import { HomeOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const SpecificCategories: FC<PropsType> = ({ carouselData, title, titleSize, icon,clickHandler, slidesNo }) => {
	// const { categoriesData } = useSelector(getCategoriesState);

	
	const handleItemClick = (el: any) => {
		clickHandler(el);
	};

	return (
		<Card title={<CardTitle title={title} size={titleSize} icon={icon} />} className="my-4 rounded">
			<div>
				<Carousel
					type="image"
					space={40}
					slides={slidesNo || 4}
					navigation
					data={carouselData}
					clickHandler={handleItemClick}
				/>
			</div>
		</Card>
	);
};

type PropsType = {
	carouselData: any[];
	title?: string;
	titleSize?: number;
	icon?: any;
	clickHandler?: (el:any) => void;
	slidesNo?:number;
};
