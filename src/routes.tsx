import React from 'react'
import {hot} from 'react-hot-loader/root'
import {Switch, Route} from 'react-router-dom'

import {StoreProvider} from '@/stores'

import {ClientProvider} from '@/services/Client'

import {AppContainer} from '@/styled/AppContainer'

const Signup = React.lazy(() => import('@/pages/Signup'))

const Routes = () => (
  <ClientProvider>
    <StoreProvider>
      <AppContainer>
        <Switch>
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </AppContainer>
    </StoreProvider>
  </ClientProvider>
)

export default hot(Routes)
