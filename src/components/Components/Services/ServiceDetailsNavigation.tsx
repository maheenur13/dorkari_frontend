import { UserComments } from '@components/Common';
import React, { FC } from 'react';
import styled from 'styled-components';
import { OverView } from '../ServiceDetails/OverView';
import { ItemDetails } from './ItemDetails';
import { Review } from './Review';

export const ServiceDetailsNavigation: FC<PropsType> = ({ item,service }) => {
	console.log('fuch',service);
	
	return (
		<Wrapper className="px-3">
			
			{item.title === 'Overview' ? (
				<OverView data={service?.faq} />
			) : item.title === 'Reviews' ? (
				<Review data={service} /> 
			) : item.title === 'Details' ? <ItemDetails data={service?.details} /> : null }
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-height: 450px;
	overflow-y: auto;
`;

type PropsType = {
	item: {
		title: string;
		data: any;
	};
	service:any;
};
