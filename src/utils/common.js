/*
 * @Author: 刘晨曦
 * @Date: 2021-08-27 14:30:11
 * @LastEditTime: 2021-08-30 15:36:54
 * @LastEditors: Please set LastEditors
 * @Description: 通用方法的封装
 * @FilePath: \quick-react\src\utils\common.js
 */
/**
 * @description: 判断数据类型
 * @param {*} data
 * @return {*} [object <Array/Object/String/Null/Undefined/Number>]
 */
function _typeOf (data) {
  return Object.prototype.toString.call(data)
}

function _trim (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

export {
  _typeOf,
  _trim
}
