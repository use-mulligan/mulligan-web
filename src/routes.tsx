import React from 'react'
import {hot} from 'react-hot-loader/root'
import {Switch, Route} from 'react-router-dom'

import {AppContainer, AppWrapper} from '@/styled/AppContainer'
import Header from '@/components/Header'

const Signup = React.lazy(() => import('@/pages/Signup'))

const Routes = () => (
  <AppWrapper>
    <AppContainer>
      <Header />
      <Switch>
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </AppContainer>
  </AppWrapper>
)

export default hot(Routes)
