import React, { FC } from 'react';
import styled from 'styled-components';

export const HtmlFormatter: FC<any> = ({data}) => {
	return (
		<DangerousHtml style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: data }}></DangerousHtml>
	);
};


const DangerousHtml = styled.div`
	overflow: hidden;
`;
