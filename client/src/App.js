import './App.css';
import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Gyms from './components/Gyms';
import GymReview from './components/GymReview';

function App() {
  const [user, setUser] = useState(null)

  //Logic below needs to be changed, forcing log in and doesn't allow access to SignUp page
  useEffect(() => {
    fetch("/me").then((resp) => {
      if(resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  if(!user) return <Login setUser={setUser} />

  function handleLogin(user) {
    setUser(user)
  }

  function handleLogout() {
    setUser(null)
  }

  return (
    <div className="App">
      <NavBar setUser={setUser} />
      <Switch>
        <Route exact path="/">
         <Home user={user} />
        </Route>
        <Route path="/loginpage">
          <Login setUser={setUser} />
        </Route>
        <Route path="/signuppage">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/gyms">
          <Gyms />
        </Route>
        <Route path="/gymreview/:id">
          <GymReview />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
