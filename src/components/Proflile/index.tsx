import { getUserState } from '@store/actions';
import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const ProfileComp = () => {
    const { profile } = useSelector(getUserState);
    return (
        <div>
           
				<Row>
					<Col span={12} className="my-2">
						<b>First Name: </b>
						<span>{profile.firstName}</span>
					</Col>
					<Col span={12} className="my-2">
						<b>Last Name: </b>
						<span>{profile.lastName}</span>
					</Col>
					<Col span={12} className="my-2">
						<b>Phone Number: </b>
						<span>{profile?.phoneNumber}</span>
					</Col>
					<Col span={12} className="my-2">
						<b>Email: </b>
						<span>{profile?.email || 'Not found'}</span>
					</Col>
				</Row>
        </div>
    );
};

export default ProfileComp;