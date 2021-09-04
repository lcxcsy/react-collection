/*
 * @Author: 刘晨曦
 * @Date: 2021-08-30 14:37:29
 * @LastEditTime: 2021-09-04 11:48:18
 * @LastEditors: Please set LastEditors
 * @Description: 接口格式
 * @FilePath: \quick-react\src\api\index.js
 */
import http from '@/core/httpInstance'

function getUserInfo () {
  return http({
    method: 'get',
    // successNotify: true,
    // successMsg: '获取成功',
    url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?_=1630720260336&cv=4747474&ct=24&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=1&uin=0&g_tk_new_20200303=5381&g_tk=5381&hostUin=0'
  })
}

export {
  getUserInfo
}
