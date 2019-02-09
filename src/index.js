import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
//import * as serviceWorker from './serviceWorker';
import './App.css'
ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//index.js 入口文件
// 可以将unregister删掉 pwa 离线页面的内容
//serviceWorker.unregister();
