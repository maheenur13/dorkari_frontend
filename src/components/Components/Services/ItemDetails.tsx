import { HtmlFormatter } from '@utils/helpers';
import { Empty } from 'antd';
import React, { FC } from 'react';

export const ItemDetails:FC<any> = ({data}) => {
    console.log('ami ekta string',data);
    
    return (
        <div>
            {
                data?  <HtmlFormatter data={data} /> :  <Empty />
            }
            
        </div>
    );
};
