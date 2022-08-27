import React, { useState } from 'react'

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function onSubmit(event) {
    event.preventDefault()
    const user = {
      username,
      password
    }
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(resp => {
      if(resp.ok) {
        resp.json().then(setUser)
      } else {
        resp.json().then((err) => setErrors(err.errors))
      }
    })
  }


  return (
    <form id="signup-form" onSubmit={onSubmit}>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        id="username"
        placeholder="Username"
        value = {username}
        onChange = {(e) => setUsername(e.target.value)}
      />
    </div>
    <div class="mb-3">
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
        value = {password}
        onChange = {(e) => setPassword(e.target.value)}
      />
    </div>
    <div class="mb-3">
      <input
        type="password"
        class="form-control"
        id="password-confirmation"
        placeholder="Password Confirmation"
        value = {password}
      />
    </div>
    
    <button id="signup-button" type="submit" class="btn btn-dark">
      Sign Up
    </button>
    </form>
  )
}

export default SignUp