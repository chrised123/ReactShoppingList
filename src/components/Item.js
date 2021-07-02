import React from 'react';
import { Alert, Button, Space } from 'antd';
import 'antd/dist/antd.css';
import { ExclamationOutlined, CloseOutlined } from '@ant-design/icons';

const Item = ({ item, index, deleteItem, toggleImportant }) => {
  return (
    <Alert
      type={item?.isImportant ? 'error' : 'info'}
      message={item?.title}
      action={
        <Space direction="horizontal">
          <Button type="primary" ghost={!item?.isImportant} shape="circle" icon={<ExclamationOutlined />} size="small" onClick={toggleImportant} />
          <Button type="danger" ghost shape="circle" icon={<CloseOutlined />} size="small" onClick={deleteItem} />
        </Space>
      }></Alert>
  );
}

export default Item;