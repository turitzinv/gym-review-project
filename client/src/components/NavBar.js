import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div class="nav nav-pills">
      <li class="nav-item">
      <NavLink class="nav-link active" aria-current="page" to="/">
        Home
      </NavLink>
      </li>
      <li class="nav_item">
      <NavLink class="nav-link" aria-current="page" to="/loginpage">
        Log in
      </NavLink>
      </li>
      <li class="nav_item">
      <NavLink class="nav-link" aria-current="page" to="/signuppage">
        Sign Up
      </NavLink>
      </li>
      <li class="nav_item">
      <NavLink class="nav-link" aria-current="page" to="/gyms">
        Gyms
      </NavLink>
      </li>
    </div>
  )
}

export default NavBar