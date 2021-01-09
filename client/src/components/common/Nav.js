import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated, logout } from '../lib/auth'
import {
  Button,
  Container,
  Menu
} from 'semantic-ui-react'


function Nav() {

  useLocation()
  
  const isLoggedIn = isAuthenticated()
  
  const history = useHistory()

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  
  return (
    <Menu
      size='large'
      pointing secondary
    >
      <Container>
        <Link to="/" className="navbar-item">
          <Menu.Item
            className="home"
            name='home'
          />
        </Link>
        {isLoggedIn && <Button as={Link} to='/edit'>
          Add Space
        </Button>}
        <Menu.Item position='right'>
          {!isLoggedIn ?
            <>
              <Button as={Link} to='/login'>
                Log In
              </Button>
              <Button as={Link} to='/register' style={{ marginLeft: '0.5em' }}>
                Register
              </Button>
            </>
            : 
            <> 
              <Button as="" onClick={handleLogout}>
              Log Out
              </Button>
              <Button as={Link} to='/profile'>
            Profile
              </Button>
            </>}
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Nav