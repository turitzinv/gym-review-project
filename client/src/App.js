import './App.css';
import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Gyms from './components/Gyms';
import GymReview from './components/GymReview';
import EditReview from './components/EditReview';
import AddGym from './components/AddGym';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((resp) => {
      if(resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  if(!user) return <Login setUser={setUser} />

//need Add Gym route added below
  return (
    <div className="App">
      <NavBar setUser={setUser} />
      <Switch>
        <Route exact path="/">
         <Home user={user} />
        </Route>
        <Route path="/gyms">
          <Gyms />
        </Route>
        <Route path="/gym_create">
          <AddGym />
        </Route>
        <Route path="/gymreview/:id">
          <GymReview user_id={user.id} />
        </Route>
        <Route path="/reviews/:id">
          <EditReview />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
