import { MainLayout } from '@components/Layouts';
import { categoryAPI } from '@libs/api';
import { NextPage } from 'next';
import { Col, message as Msg, Row, Tabs } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect,useState } from 'react';
import { Container } from 'react-bootstrap';
import { CashOn, Digital } from '@components/Payment';

const PaymentPage: NextPage = () => {
	const {

		query: { id },push
	} = useRouter();

    const [orderData, setOrderData] = useState<any>({});
	// console.log(id);

	useEffect(() => {
		if (id) {
			getOrderData();
		}
	}, [id]);

	const getOrderData = async () => {
		try {
			const { data, message, success } = await categoryAPI.getOrdetDataById(id);
			if (success) {
                setOrderData(data);
				console.log(data);
			}
		} catch (error) {
			Msg.error(error.toString());
		}
	};

    const onTabChange = (e) => {
        console.log(e);
        
    };

    const submitAndConfirm = async (paymentMethod)=> {
        // console.log(paymentMethod);
        const newPayload = {...orderData};
        newPayload['paymentMethod']= paymentMethod;
        try {
            const {data,success,message} = await categoryAPI.postAndDonePyament(newPayload);
            if(success) {
                Msg.success(message.toString());
                push('/orders');
            }

        } catch (error) {
            alert(error.toString());
        } 
        
    };

	return (
		<MainLayout>
             <Container className='bg-white p-3 rounded my-3'>
                <h6 style={{fontSize:'0.725rem'}} >Product Info</h6>
                <Row>
                   <Col span={8} >
                   <h6>Order name : <span>{orderData?.title}</span></h6>
                   </Col>
                   <Col span={8} >
                   <h6>Order By : <span>{orderData?.firstName + ' ' + orderData?.lastName}</span></h6>
                   </Col>
                   <Col span={8} >
                   <h6>Phone No : <span>{orderData?.phoneNumber}</span></h6>
                   </Col>
                   <Col span={8} >
                   <h6>Delivery Date: <span>{orderData?.deliveryDate}</span></h6>
                   </Col>
                   <Col span={8} >
                   <h6>Delivery Time: <span>{orderData?.deliveryTime}</span></h6>
                   </Col>
                   <Col span={8} >
                   <h6>Price: <span>BDT {orderData?.price}</span></h6>
                   </Col>
                   <Col span={8} >
                   <h6>Address: <span>BDT {orderData?.address}</span></h6>
                   </Col>
                   <Col span={8} >
                   <h6>Status: <span className='text-info' > {orderData?.status}</span></h6>
                   </Col>
                </Row>
             </Container>
            <Container className='bg-white p-3 rounded my-3'>

            <Tabs
				defaultActiveKey="1"
				onChange={onTabChange}
				items={[
					{
						label: 'On Cash',
						key: '1',
						children: <CashOn submitAndConfirm={submitAndConfirm} />,
					},
					{
						label: 'On Card or Mobile Bank',
						key: '2',
						children: <Digital/>,
					},
					
				]}
			/>
            </Container>
			
		</MainLayout>
	);
};

export default PaymentPage;
