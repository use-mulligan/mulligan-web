import gql from 'graphql-tag'

const SIGNUP = gql`
  mutation updateCanvas(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    signup(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      # account {
      #   email
      #   role
      #   profile {
      #     fullName
      #   }
      # }
    }
  }
`

export default SIGNUP
