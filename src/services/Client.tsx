import React from 'react'
import {Provider, createClient} from 'urql'

export const client = createClient({
  url: 'http://138.197.128.14/',
})

export const ClientProvider = ({children}: any) => (
  <Provider value={client}>{children}</Provider>
)
