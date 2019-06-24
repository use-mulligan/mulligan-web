import React from 'react'
import {hot} from 'react-hot-loader/root'
import {Switch, Route} from 'react-router-dom'

import {StoreProvider} from '@/stores'

import {ClientProvider} from '@/services/Client'

const Signup = React.lazy(() => import('@/pages/Signup'))

const Routes = () => (
  <ClientProvider>
    <StoreProvider>
      <Switch>
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </StoreProvider>
  </ClientProvider>
)

export default hot(Routes)
