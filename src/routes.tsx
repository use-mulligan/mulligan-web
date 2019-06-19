import React from 'react'
import {hot} from 'react-hot-loader/root'
import {Switch, Route} from 'react-router-dom'

import {StoreProvider} from '@/stores'

const Login = React.lazy(() => import('@/pages/Login'))

const Routes = () => (
  <StoreProvider>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </StoreProvider>
)

export default hot(Routes)
