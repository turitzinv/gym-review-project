import React, { useState } from "react";
import Error from "./Error";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  let history = useHistory();

  function handleLogin(event) {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
        history.push("/");
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleSignUp(event) {
    event.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
        history.push("/");
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function errorRender() {
    if (errors instanceof Array) {
      return errors.map((error) => <Error key={error} error={error} />);
    } else {
      return null;
    }
  }

  return (
    <div>
      <h1 id="login-gymview">GymView</h1>
      <p id="login-message">Please Login or Create an Account</p>
      <form id="login-form" onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorRender()}
        <button id="login-button" type="submit">
          Log In
        </button>
        <button id="signup-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
