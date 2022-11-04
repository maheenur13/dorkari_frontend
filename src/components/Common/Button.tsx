import React, { useState, FC } from 'react';
import { Button as Btn } from 'antd';

export const Button: FC<PropsType> = ({ type, htmlType, title, loading }) => {
    
	return (
		<Btn type={type} htmlType={htmlType} loading={loading}>
			{title}
		</Btn>
	);
};

Button.defaultProps = {
	type: 'primary',
	htmlType: 'submit',
	title: 'Submit',
};

type PropsType = {
	type?: 'link' | 'text' | 'ghost' | 'primary' | 'default' | 'dashed';
	htmlType?: 'button' | 'submit' | 'reset';
	title: string;
	loading?:  boolean;
};

