import React from 'react'
import {hot} from 'react-hot-loader/root'
import {Switch, Route} from 'react-router-dom'

import {StoreProvider} from '@/stores'

import {ClientProvider} from '@/services/Client'

const Login = React.lazy(() => import('@/pages/Login'))

const Routes = () => (
  <ClientProvider>
    <StoreProvider>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </StoreProvider>
  </ClientProvider>
)

export default hot(Routes)
