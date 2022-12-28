import { Col, Row } from 'antd';
import  { FC } from 'react';
import { CardComp } from './CardComp';

export const CarouselComp:FC<any> = ({item}) => {
    return (
        <div className='border my-3 shadow shadow-sm p-4'>
            <h6>{item?.title}</h6>
            <Row>
                {
                    item?.items?.map((el,idx)=>{
                        return (
                            <Col key={idx} span={5} className='border rounded m-1 p-2'>
                                <CardComp item={el} type='card' />
                            </Col>
                        );
                    })
                }
            </Row>
        </div>
    );
};