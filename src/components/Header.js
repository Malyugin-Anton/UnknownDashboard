import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () =>
  <div className="header uk-background-primary uk-light">
    <nav className="uk-container uk-container-expand" uk-navbar={"true"}>
      <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#">ADMIN</a>
      </div>

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">

            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink activeStyle={{ color: '#fff' }} to="/info">Info</NavLink>
            </li>

        </ul>
      </div>
    </nav>
  </div>

export default Header
