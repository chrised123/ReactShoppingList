import React from 'react';
import Item from './Item';
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';

const Items = ({ list, deleteItem, toggleImportant }) => {
  return (
    <SwipeableList>
      {list.map((item, index) => (
        <Item item={item} key={index} deleteItem={() => deleteItem(index)} toggleImportant={() => toggleImportant(index)}/>
      ))}
    </SwipeableList>
  );
}

export default Items;