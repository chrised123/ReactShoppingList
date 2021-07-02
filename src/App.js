import React from 'react';
import ShoppingList from './components/ShoppingList';
import './App.css';
import {Layout} from 'antd';

function App() {
  return (
    <Layout className="layout">
      <ShoppingList />
    </Layout>
  );
}

export default App;
