import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {observer} from 'mobx-react'

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  DiscoverTab,
  CreateTab,
  LibraryTab,
  ProfileTab,
  LoginTab,
  SignupTab,
} from '@/styled/Header'
import Button from '@/styled/Button'
import MulliganLogo from '@/assets/Frame.png'
import {useStore} from '@/stores'

const Header: FC = observer(props => {
  const {UserStore} = useStore()
  console.log(UserStore)
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link to="/home">
          <HeaderLogo src={MulliganLogo} />
        </Link>
        <DiscoverTab to="/home">
          <Button intent="none" appearance="minimal">
            Discover
          </Button>
        </DiscoverTab>
        <CreateTab to="/story/create">
          <Button intent="none" appearance="minimal">
            Create
          </Button>
        </CreateTab>
        <LibraryTab to="/profile">
          <Button intent="none" appearance="minimal">
            My Library
          </Button>
        </LibraryTab>
        {/* <GhostWrapper isDoneRendering={pullingLoginData}>
          <GhostSmall />
        </GhostWrapper> */}
        {/* {!me && !pullingLoginData && ( */}
        {true && (
          <>
            <LoginTab to="/login">
              <Button intent="none" appearance="link">
                Login
              </Button>
            </LoginTab>
            <SignupTab to="/register">
              <Button intent="none" appearance="default">
                Sign Up
              </Button>
            </SignupTab>
          </>
        )}
        {/* {me && !pullingLoginData && (
          <>
            <ProfileTab>
              <HeaderDropdown />
            </ProfileTab>
          </>
        )} */}
      </HeaderContainer>
    </HeaderWrapper>
  )
})

export default Header
