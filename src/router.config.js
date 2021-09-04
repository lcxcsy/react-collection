/*
 * @Author: your name
 * @Date: 2021-09-03 16:37:45
 * @LastEditTime: 2021-09-03 17:33:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \quick-react\src\router.config.js
 */
import Hello from '@/pages/Hello'
import Error from '@/pages/Error'

const routers = [
  {
    path: '/', /** 默认页面 */
    component: Hello,
    exact: true /** 是否为严格模式 */
  },
  {
    path: '/error',
    exact: true,
    component: Error
  },
  {
    path: '/hello',
    exact: true,
    component: Hello,
    routes: [] /** 嵌套的子路由 */
  }
]

export default routers
