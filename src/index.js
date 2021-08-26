/*
 * @Author: your name
 * @Date: 2021-08-26 16:19:51
 * @LastEditTime: 2021-08-26 18:40:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react\react-demo\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Home from '../src/pages/home'
import reportWebVitals from './reportWebVitals'

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
