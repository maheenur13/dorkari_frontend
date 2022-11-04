import { FC, ForwardRefExoticComponent, ReactNode } from 'react';
import styled from 'styled-components';
import Icon from '@ant-design/icons';

export const CardTitle: FC<PropsType> = ({ title, size,icon }) => {
	return <Wrapper size={size} ><span className='me-3'>{icon}</span><span className='mt-2'>{title}</span></Wrapper>;
};

const Wrapper = styled.h4<{size?:number}>`
    font-size:${props => props.size}rem;
    display: flex;
    align-items: center;
    margin: 0;
`;

type PropsType = {
	title: string;
	size?: number;
    icon?:ReactNode ;
};
