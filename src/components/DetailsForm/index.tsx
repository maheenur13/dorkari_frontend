import { getUserState } from '@store/actions';
import { Col, DatePicker, Form, Input, Row, TimePicker } from 'antd';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
const { TextArea } = Input;

const DetailsForm:FC<any> = ({form}) => {
	const { profile } = useSelector(getUserState);

    const handleDateChange = (e,date)=> {
        console.log(e);
        console.log(date);
        form?.setFieldValue('deliveryDate',e);
        
    };
    const handleTimeChange = (e,time)=> {
        console.log(time);
        // form?.setFieldValue('deliveryTime',time);
        
    };
	return (
		<Row gutter={12}>
			<Col span={12}>
				<Form.Item
					name="firstName"
					label="First Name"
					rules={[
						{
							required: true,
							message: 'First Name required!',
						},
					]}
					initialValue={profile.firstName}
				>
					<Input />
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.Item
					name="lastName"
					label="Last Name"
					rules={[
						{
							required: true,
							message: 'Last Name required!',
						},
					]}
					initialValue={profile.lastName}
				>
					<Input />
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.Item
					name="phoneNumber"
					label="Phone Number"
					rules={[
						{
							required: true,
							message: 'Phone Number required!',
						},
					]}
					initialValue={profile.phoneNumber}
				>
					<Input disabled />
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.Item name="email" label="Email" initialValue={profile.email}>
					<Input />
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.Item
					label="Address"
					name="address"
					rules={[
						{
							required: true,
							message: 'Address required!',
						},
					]}
				>
					<TextArea rows={4} />
				</Form.Item>
			</Col>
            <Col span={6} >
            <Form.Item
					label="Delivery Date"
					name="deliveryDate"
					rules={[
						{
							required: true,
							message: 'Date required!',
						},
					]}
                    
				>
					<DatePicker format={'YYYY-MM-DD'}  className='w-100' onChange={handleDateChange} />
				</Form.Item>
            </Col>
            <Col span={6} >
            <Form.Item
					label="Delivery Time"
					name="deliveryTime"
					rules={[
						{
							required: true,
							message: 'TIme required!',
						},
					]}
				>
					<TimePicker  className='w-100' onChange={handleTimeChange} />
				</Form.Item>
            </Col>
		</Row>
	);
};

export default DetailsForm;
