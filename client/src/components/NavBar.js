import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = ({ setUser }) => {

  const linkStyles = {
    display: "inline-block",
    width: "162px",
    padding: "10px",
    margin: "0 4px 6px",
    background: "Dodgerblue",
    textDecoration: "none",
    color: "white",
  };

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
    <div class="nav">
      <li class="nav-item">
      <NavLink style={linkStyles} to="/">
        Home
      </NavLink>
      </li>
      <li class="nav_item">
      <NavLink style={linkStyles} to="/gyms">
        Gyms
      </NavLink>
      </li>
      <li class="nav_item">
      <NavLink style={linkStyles} to="/gym_create">
        Add Gym
      </NavLink>
      </li>
      <li class="nav_item">
      <NavLink style={linkStyles} to="/my_gyms_reviewed">
        My Reviewed Gyms
      </NavLink>
      </li>
      <button id="logout-button" onClick={handleLogoutClick} style={linkStyles}> Logout </button>
    </div>
  )
}

export default NavBar