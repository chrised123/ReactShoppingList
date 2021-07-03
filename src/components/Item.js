import React from 'react';
import { Alert, Button, Space } from 'antd';
import 'antd/dist/antd.css';
import './../styles/Item.css';
import { CloseCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';


const Item = ({ item, index, deleteItem, toggleImportant }) => {
  return (
    <SwipeableListItem
      swipeLeft={{
        content: <div className="swipe-item item-right"><CloseCircleFilled className="swipe-icon"/></div>,
        action: () => deleteItem()
      }}
      swipeRight={{
        content: <div className="swipe-item item-left"><ExclamationCircleFilled className="swipe-icon"/></div>,
        action: () => toggleImportant()
      }}
      onSwipeProgress={progress => console.info(`Swipe progress: ${progress}%`)}
    >
      <Alert
        type={item?.isImportant ? 'error' : 'info'}
        message={item?.title}
        style={{ width: "100%" }}>
      </Alert>
    </SwipeableListItem>
  );
}

export default Item;