import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const All =()=> (
  <div>
    All master
  </div>
)
root.render(
  <All/>
)