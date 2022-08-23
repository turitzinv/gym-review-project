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
  const [allGyms, setAllGyms] = useState([])

  useEffect(() => {
    fetch("/me").then((resp) => {
      if(resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/gyms")
    .then ((resp) => resp.json())
    .then((gyms) => setAllGyms(gyms))
  }, [])
  

  // function handleLogin(user) {
  //   setUser(user)
  // }

  // function handleLogout() {
  //   setUser(null)
  // }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/loginpage">
          <Login setUser={setUser} />
        </Route>
        <Route path="/signuppage">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/gyms">
          <Gyms allGyms={allGyms} />
        </Route>
        <Route path="/gymreview/:id">
          <GymReview allGyms={allGyms} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
