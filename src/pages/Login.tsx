import React, {FC} from 'react'

import {useStore} from '@/stores'

const Login: FC = props => {
  const {UserStore} = useStore()
  console.log(UserStore)
  return <p>hello {UserStore.name}</p>
}

export default Login
