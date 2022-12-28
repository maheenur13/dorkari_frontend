import { CardTitle, Carousel } from '@components/Common';
import { Card } from 'antd';
import React, { FC } from 'react';
export const SpecificCategories: FC<PropsType> = ({ carouselData, title, titleSize, icon,clickHandler, slidesNo }) => {
	
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
