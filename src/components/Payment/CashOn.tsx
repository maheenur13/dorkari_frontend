import { Button, Popconfirm } from 'antd';
import React, { FC } from 'react';

export const CashOn: FC<any> = ({ submitAndConfirm }) => {
	const cancel = (e) => {
		console.log(e);
	};

	const confirm = () => {
		submitAndConfirm('on_cash');
	};
	return (
		<div>
			<small>
				<ul>
					<li>You need to pay by cash after receive your service!</li>
				</ul>
			</small>
			<Popconfirm
				title="Are you sure to submit?"
				onConfirm={confirm}
				onCancel={cancel}
				okText="Yes"
				cancelText="No"
			>
				<Button type="primary">Submit & Confirm</Button>
			</Popconfirm>
		</div>
	);
};
