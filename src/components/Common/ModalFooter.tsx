import {Form, Button } from 'antd';

export const ModalFooter = () => {
    return (
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
    </Form.Item>
    );
};
