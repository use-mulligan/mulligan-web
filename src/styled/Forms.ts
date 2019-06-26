import styled from 'styled-components'

export const SignupFormContainer = styled.div`
  position: relative;
  top: 10vh;
`

export const SignupForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5em;

  div:nth-child(1) {
    grid-area: 1 / 1;
  }
  div:nth-child(2) {
    grid-area: 1 / 2;
  }
  div {
    grid-column: span 2;
  }
  button {
    grid-column: span 2;
  }
`
