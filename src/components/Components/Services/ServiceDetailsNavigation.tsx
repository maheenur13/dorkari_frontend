import { UserComments } from '@components/Common';
import React, { FC } from 'react';
import styled from 'styled-components';
import { OverView } from '../ServiceDetails/OverView';
import { ItemDetails } from './ItemDetails';
import { Review } from './Review';

export const ServiceDetailsNavigation: FC<PropsType> = ({ item }) => {
	return (
		<Wrapper className="px-3">
			
			{item.title === 'Overview' ? (
				<OverView data={item.data} />
			) : item.title === 'Reviews' ? (
				<Review /> 
			) : item.title === 'Details' ? <ItemDetails/> : null }
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
};
