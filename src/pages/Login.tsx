import React, {FC} from 'react'
import useFormal from '@kevinwolf/formal-web'
import * as yup from 'yup'

import {Input, Label} from '@/styled/TextInput'

import {useStore} from '@/stores'

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
})

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
}

const Login: FC = props => {
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values => console.log(values),
  })
  const {UserStore} = useStore()
  console.log(props)
  return (
    <form {...formal.getFormProps()}>
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          hasWarning={formal.errors.firstName}
          {...formal.getFieldProps('firstName')}
          type="text"
        />
        {formal.errors.firstName && <div>{formal.errors.firstName}</div>}
      </div>
      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          hasWarning={formal.errors.lastName}
          {...formal.getFieldProps('lastName')}
          type="text"
        />
        {formal.errors.lastName && <div>{formal.errors.lastName}</div>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input {...formal.getFieldProps('email')} type="text" />
        {formal.errors.email && <div>{formal.errors.email}</div>}
      </div>
      <button {...formal.getSubmitButtonProps()} type="submit">
        Submit
      </button>
    </form>
  )
}

export default Login
