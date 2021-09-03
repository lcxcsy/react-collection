/*
 * @Author: 刘晨曦
 * @Date: 2021-08-30 16:10:30
 * @LastEditTime: 2021-09-03 17:35:59
 * @LastEditors: Please set LastEditors
 * @Description: React-router的一些配置
 * @FilePath: \quick-react\src\core\router.config.js
 */
import routers from '@/router.config'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function RedirectWithStatus ({ from, to, status }) {
  return (
    <Route
      render={({ staticContext }) => {
        // there is no `staticContext` on the client, so
        // we need to guard against that here
        if (staticContext) {
          console.log(staticContext)
          staticContext.status = status
        }
        return <Redirect from={from} to={to} />
      }}
    />
  )
}

const RouteConfig = () => {
  return (
    <Router>
      <Switch>
        {/* <RedirectWithStatus status={ 404 } to='/error' /> */}
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
