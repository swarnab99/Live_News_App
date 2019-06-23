import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo left">Samachar</Link>
          <ul className="right">
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
