import React, { useState } from "react";
import Error from "./Error";
import {useHistory} from "react-router-dom";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  let history = useHistory()

  function onClick(){
    history.push("/signuppage")
  }

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
        history.push("/")
      } else {
        resp.json().then((err) => setErrors(err.errors))
      }
    })
  }

  function errorRender() {
    if (errors instanceof Array) {
      return errors.map((error) => 
      <Error key={error} error={error} />
      )
    } else {
      return null
    }
  }


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
      {errorRender()}
      <button id="login-button" type="submit" class="btn btn-dark">
        Log In
      </button>
      <button id="login-button" onClick={onClick} class="btn btn-dark">
        Sign Up
      </button>
    </form>
  );
};

export default Login;
