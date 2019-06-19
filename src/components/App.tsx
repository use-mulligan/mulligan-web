import React, {FC, Suspense} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from '@/routes'

const App: FC = () => (
  <Router>
    <Suspense fallback={'Loading ...'}>
      <Routes />
    </Suspense>
  </Router>
)

export default App
