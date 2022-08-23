import React, { useState } from "react";
import Error from "./Error";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }) .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      } else {
        resp.json().then((err) => setErrors(err.errors))
        console.log(errors)
      }
    })
  }

  const fullErrorList = errors.map((error) => (
    <Error
    key={error}
    error={error}
     />
  ))

  console.log("these are errors ",errors)
  //console.log("these are fullErrorList", fullErrorList)

  return (
    <form id="login-form" onSubmit={handleSubmit}>
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
      <button id="login-button" type="submit" class="btn btn-dark">
        Log In
      </button>
      <div>
       {fullErrorList}
      </div>
    </form>
    
  );
};

export default Login;
