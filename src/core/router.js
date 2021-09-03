/*
 * @Author: 刘晨曦
 * @Date: 2021-08-30 16:10:30
 * @LastEditTime: 2021-09-03 17:16:11
 * @LastEditors: Please set LastEditors
 * @Description: React-router的一些配置
 * @FilePath: \quick-react\src\core\router.config.js
 */
import routers from '@/router.config'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const RouteConfig = () => {
  return (
    <Router>
      <Switch>
        {
          routers.map((router, index) => {
            return (
              <Route
                key={ index }
                path={ router.path }
                exact={ router.exact || false }
                render={
                  props => (
                    <router.component {...props} routes={ router.routes } />
                  )
                }
              />
            )
          })
        }
      </Switch>
    </Router>
  )
}

export default RouteConfig
