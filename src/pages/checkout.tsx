import DetailsForm from '@components/DetailsForm';
import { ServicesLayout } from '@components/Layouts';
import { categoryAPI } from '@libs/api';
import { getProductState } from '@store/product/product.slice';
import { HtmlFormatter } from '@utils/helpers';
import { Button, Col, Form, Row, message as Msg } from 'antd';
import moment from 'moment';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CheckOutPage: NextPage = () => {
	const { selectedProduct } = useSelector(getProductState);
	const [form] = Form.useForm();
    const router = useRouter();
    const [isPaymentPage, setIsPaymentPage]= useState(false);

	const handleSubmitForm = (data: any) => {
		const newPaylod = { ...data, ...selectedProduct };
		newPaylod['deliveryDate'] = moment(newPaylod['deliveryDate']).format('YYYY-MM-DD');
		newPaylod['deliveryTime'] = moment(newPaylod['deliveryTime']).format('HH:MM:SS');
		newPaylod['orderCreateDate'] = moment().format('YYYY-MM-DD');
		newPaylod['orderCreateTime'] = moment().format('HH:MM:SS');
		newPaylod['categoryId'] = newPaylod['_id'];
		newPaylod['status'] = 'pending';
		newPaylod['paymentStatus'] = 'notPaid';
		newPaylod['paymentMethod'] = null;
		delete newPaylod['_id'];
		console.log(newPaylod);
        submitToApi(newPaylod);
	};

	const submitToApi = async (payload) => {
		try {
			const { data, message, success } = await categoryAPI.postPreOrderData(payload);
			if (success) {
                // setIsPaymentPage(true);

				Msg.success(message);
                form.resetFields();
                router.push({
                    pathname:`/payment/${data?.insertedId}`,
                });

			} else {
                setIsPaymentPage(false);
				Msg.error(message);
			}
		} catch (error) {
            setIsPaymentPage(false);
			Msg.error(error);
		}
	};

	return (
		<ServicesLayout>
			<Container className="bg-white my-3 rounded p-3">
				<Row className="align-items-center">
					<Col span={18}>
						<ProductBox>
							<h6 style={{ fontSize: '12px' }}>Product Details</h6>
							<h6>{selectedProduct?.serviceName}</h6>
							<HtmlFormatter data={selectedProduct?.details} />
						</ProductBox>
					</Col>
					<Col span={6} className="text-center">
						BDT {selectedProduct?.price}
					</Col>
				</Row>
			</Container>
			<Container className="bg-white my-3 rounded p-3">
				<h6 style={{ fontSize: '12px' }}>Order Details</h6>
				<Form layout="vertical" form={form} onFinish={handleSubmitForm} name="register" scrollToFirstError>
					<DetailsForm form={form} />
					<Form.Item>
						<Button htmlType="submit" type="primary">
							Proceed To Payment
						</Button>
					</Form.Item>
				</Form>
			</Container>
		</ServicesLayout>
	);
};

const ProductBox = styled.div``;

export default CheckOutPage;
