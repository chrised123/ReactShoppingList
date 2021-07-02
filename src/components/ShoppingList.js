import React, { useEffect, useState } from "react";
import AddShoppingItem from './AddShoppingItem';
import Items from './Items';
import { get, set } from './../util/storage';
import { Typography } from 'antd';

const { Title } = Typography;
const ShoppingList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log('this should only happen at the beginning');
    setList(get('list'));
  }, []);

  useEffect(() => {
    console.log('this should happen every update');
    set('list', list);
  });

  const addItem = (item) => {
    console.log(list);
    setList([...list, item]);
  }

  const deleteItem = (i) => {
    setList(list.filter((item, index) => index !== i));
  }

  const toggleImportant = (i) => {
    setList(list.map((item, index) => {
      if (i === index) item.isImportant = !item.isImportant;
      return item;
    }));
  }

  return (
    <>
      <div className="container">
        <Title level={3}>Shopping List</Title>
        <AddShoppingItem addItem={addItem} />
        <Items list={list} deleteItem={deleteItem} toggleImportant={toggleImportant}/>
      </div>
    </>
  )
}

export default ShoppingList;