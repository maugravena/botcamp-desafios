import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/Login'
import Chat from './pages/Chat'

import './styles/reset.css'
import './styles/main.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/chat" component={Chat} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
