import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Header
} from 'semantic-ui-react'

function Home() {

  return (
    <Container text className="container">
      <div className="header">
        <h1>
          cityspace
        </h1>
      </div>

      <Header
        as='h2'
        content='Discover and share your favourite spots in the city.'
        className="title"
      />
      <div className="button-wrapper">
        <Link to="/spaces" className="navbar-item">
          <Button primary size='huge' animated='fade'>
            <Button.Content visible>Find your happy place</Button.Content>
            <Button.Content hidden>London is waiting</Button.Content>
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default Home