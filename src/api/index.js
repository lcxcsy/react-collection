/*
 * @Author: 刘晨曦
 * @Date: 2021-08-30 14:37:29
 * @LastEditTime: 2021-08-30 15:27:04
 * @LastEditors: Please set LastEditors
 * @Description: 接口格式
 * @FilePath: \quick-react\src\api\index.js
 */
import http from '@/core/httpInstance'

function getUserInfo () {
  return http({
    method: 'get',
    successNotify: true,
    successMsg: '获取成功',
    url: 'https://localhost:3000/api/demo/userInfo'
  })
}

export {
  getUserInfo
}
