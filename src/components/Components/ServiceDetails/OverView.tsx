import React, { FC } from 'react';
import styled from 'styled-components';

export const OverView: FC<PropsType> = ({ data }) => {
	console.log('data', data);

	return (
		<>
			{data.items.map((el, idx) => {
				return (
					<Wrapper key={idx} className="mb-4">
						<h5 className='mb-3'>{el.title}</h5>
						<ul>
							{el.lists.map((el, id) => {
								return (
									<li className="mb-2" key={id}>
										{el}
									</li>
								);
							})}
						</ul>
					</Wrapper>
				);
			})}
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
