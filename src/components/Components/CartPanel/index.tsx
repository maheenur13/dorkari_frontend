import { HtmlFormatter } from '@utils/helpers';
import { Button, Col, Row } from 'antd';
import React, { FC } from 'react';
import styled from 'styled-components';

const CartPanel: FC<any> = ({ selectedService }) => {
	return (
		<Wrapper>
			<Col span={24} className="p-3">
				<Row>
					<Col span={24} className='border rounded p-2 w-100 d-flex justify-content-between'>
						<div >
                        <h6>{selectedService?.title}</h6>
						<HtmlFormatter data={selectedService.details} />
                        </div>
                        <div>
                        <p className="text-end mt-3 pe-2">BDT {selectedService.price}</p>
                        </div>
					</Col>
					
				</Row>
			</Col>
			{/* <Border /> */}
			{/* <Col span={12}></Col> */}
		</Wrapper>
	);
};

export default CartPanel;

const Wrapper = styled(Row)``;

const Border = styled.div`
	border: 1px solid #929292;
	width: 1px;
	height: 250px;
`;
