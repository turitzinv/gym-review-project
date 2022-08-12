import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div class="nav nav-pills">
      <NavLink class="nav-link active" aria-current="page" to="/">
        Home
      </NavLink>
    </div>
  )
}

export default NavBar