/*
 * @Author: 刘晨曦
 * @Date: 2021-08-28 10:09:24
 * @LastEditTime: 2021-08-30 14:04:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \quick-react\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import reportWebVitals from './reportWebVitals'
import '@/styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
