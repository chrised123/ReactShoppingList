import React, { useState } from "react";
import './../styles/AddShoppingItem.css';
import 'antd/dist/antd.css';
import { Form, Input, Button, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const MAX_TEXT_LENGTH = 80;

const AddShoppingItem = ({ addItem }) => {
  const [value, setValue] = useState({
    title: '',
    isImportant: false
  });
  const [form] = Form.useForm();
  const nameInput = React.useRef(null);

  const handleSubmit = (formValue) => {
    if (formValue.title) {
      console.log('formValue');
      value.title = formValue.title;
      addItem(value);
      setValue({
        title: '',
        isImportant: false
      });
      form.resetFields();
      nameInput.current.focus({
        cursor: 'start',
      });
    }
  };

  return (
    <>
      <div className="clearfix">
        <Form form={form} onFinish={handleSubmit} name="basic">
          <Row justify="center">
            <Col span={18}>
              <Form.Item name="title" rules={[{ required: true, message: 'Type something bonehead!' }]}>
                <Input ref={nameInput} size="large" placeholder="Shopping item" maxLength={ MAX_TEXT_LENGTH}/>
              </Form.Item>
            </Col>
            <Col offset={1} span={5}>
              <Form.Item>
                <Button type="primary" shape="round" icon={<PlusOutlined />} size="large" style={{ width: "100%" }} htmlType="submit"/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  )
}

export default AddShoppingItem;