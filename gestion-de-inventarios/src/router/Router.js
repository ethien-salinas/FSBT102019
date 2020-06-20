import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import Nav from '../view/Nav'
import Login from '../view/Login'
import Signin from '../view/Signin'
import Dashboard from '../view/Dashboard'

const Router = () => {
  return (
    <BrowserRouter>
      <Route component={Nav} />
      <Route path="/login" component={Login} />
      <Route path="/sigin" component={Signin} />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  )
}

export default Router