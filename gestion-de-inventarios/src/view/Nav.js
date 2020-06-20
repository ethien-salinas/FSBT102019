import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><NavLink to="/login">login</NavLink></li>
        <li><NavLink to="/sigin">sigin</NavLink></li>
        <li><NavLink to="/dashboard">dashboard</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav
