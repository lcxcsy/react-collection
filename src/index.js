/*
 * @Author: 刘晨曦
 * @Date: 2021-08-28 10:09:24
 * @LastEditTime: 2021-09-07 11:11:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \quick-react\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import Routes from '@/core/routerDom'
import '@/styles/index.scss'

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
