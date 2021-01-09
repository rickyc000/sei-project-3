import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import SpaceIndex from './components/spaces/SpaceIndex'
import SpaceIndexView from './components/spaces/SpaceIndexView'
import SpaceShow from './components/spaces/SpaceShow'
import SpaceNew from './components/spaces/SpaceNew'
import SpaceEdit from './components/spaces/SpaceEdit'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/spaces/new" component={SpaceNew} />
        <Route path="/spaces/spaceshow" component={SpaceShow} />
        <Route path="/spaces/edit" component={SpaceEdit} />
        <Route path="/spaces" component={SpaceIndex} />
        <Route path="/space" component={SpaceIndexView} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        
      </Switch>
    </BrowserRouter>
  )
}

export default App