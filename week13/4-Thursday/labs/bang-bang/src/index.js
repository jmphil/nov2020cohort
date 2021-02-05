import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bang from './bang'
import Parent from './exercise1/Parent'
import Grandchild from './exercise1/Grandchild';
import Child from './exercise1/Child'

let myArr = ['Jordan', 'Jake', 'Joe', 'Matt']
let newArr = ['Tonya', 'Anthony']

ReactDOM.render(
  <React.StrictMode>
    <div>  
      <Parent firstName={myArr.[0]} />
      {/* <Parent firstName={myArr.[1]} />
      <Parent firstName={myArr.[2]} />
      <Parent firstName={myArr.[3]} /> */}
      </div>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
