import React from 'react';
import { Space } from 'antd';
import Item from './Item';

const Items = ({ list, deleteItem, toggleImportant }) => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {list.map((item, index) => (
        <Item item={item} key={index} deleteItem={() => deleteItem(index)} toggleImportant={() => toggleImportant(index)}/>
      ))}
    </Space>
  );
}

export default Items;