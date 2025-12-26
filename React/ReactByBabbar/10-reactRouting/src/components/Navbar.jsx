import React from 'react'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        {/* We should use Link tag for navigation, means no need to reload whole page for different components */}
        {/* NavLink tag is just like Link, but with extra power 👉
            it knows which route is currently active and lets you style the active link automatically. */}
        {/* <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/dashboard">Dashboard</Link>
        </li> */}

        {/* <NavLink> tag have one default flag called isActive */}
        <li>
            <NavLink to="/" className={({isActive}) => isActive ? "active-link" : "normal-link"}>
                Home
            </NavLink>
        </li>
        
        <li>
            <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-link" : "normal-link"}>
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : "normal-link"}>
                About
            </NavLink>
        </li>




      </ul>
    </div>
  )
}

export default Navbar
