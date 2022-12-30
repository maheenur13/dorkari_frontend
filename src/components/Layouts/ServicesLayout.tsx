import { CopyRight, Header } from '@components/Includes';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export const ServicesLayout: FC<PrposType> = ({ children }) => {
	return (
		<Wrapper>
			<>
				<Header />
				<main>{children}</main>
			</>
			<CopyRight />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	min-height: 100vh;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
`;

type PrposType = {
	children?: ReactNode;
};
