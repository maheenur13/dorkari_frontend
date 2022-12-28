import { HtmlFormatter } from '@utils/helpers';
import { Empty } from 'antd';
import React, { FC } from 'react';
import styled from 'styled-components';

export const OverView: FC<PropsType> = ({ data }) => {

	return (
		<>
		 <div>
            {
                data?  <HtmlFormatter data={data} /> :  <Empty />
            }
            
        </div>
		</>
	);
};

const Wrapper = styled.div`
	h5 {
        font-size: 1.5rem;
        font-weight: 600;
	}
	li {
		font-size: 1rem;
		font-weight: 450;
	}
`;

type PropsType = {
	data: {
		items: ItemsType;
	};
};

type ItemsType = {
	title: string;
	lists: [string];
}[];
