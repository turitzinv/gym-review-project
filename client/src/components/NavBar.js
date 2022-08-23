import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = ({ setUser }) => {

  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE"
    })
    .then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    })
  }


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
      <button onClick={handleLogoutClick}> Logout </button>
    </div>
  )
}

export default NavBar