import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

import { getUserProfile, headers } from '../lib/api'
import { isAuthenticated, logout, getUserId } from '../lib/auth'
import {
  Button,
  Container,
  Menu
} from 'semantic-ui-react'


function Nav() {

  const [profile, setProfile] = React.useState({})

  useLocation()
  
  const isLoggedIn = isAuthenticated()
  
  const history = useHistory()

  React.useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await getUserProfile(headers())
        setProfile(data)
      } catch (err) {
        console.log(err)
        // setHasError(true)
      }
    }
    getProfile()
  }, [])


  console.log(profile.profileImage)
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
        <Link to="/spaces" className="navbar-item">
          <Menu.Item
            className="home"
            name='Explore'
          />
        </Link>
        {isLoggedIn && 
         <Link to="/spaces/new" className="navbar-item">
           <Menu.Item
             className="home"
             name='Add New Space'
           />
         </Link>}
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
              <Link to={`/profile/${getUserId()}`} className="navbar-item">
                <i className="big user circle icon"></i>
              </Link>
            </>}
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Nav