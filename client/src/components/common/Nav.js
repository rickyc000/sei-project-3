import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Menu
} from 'semantic-ui-react'


function Nav() {

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
        <Menu.Item position='right'>
          <Button as='a' >
            Log in
          </Button>
          <Button as='a' style={{ marginLeft: '0.5em' }}>
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Nav