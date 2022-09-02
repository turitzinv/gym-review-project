import './App.css';
import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Gyms from './components/Gyms';
import GymReview from './components/GymReview';
import EditReview from './components/EditReview';

function App() {
  const [user, setUser] = useState(null)
  //const [editReview, setEditReview] = useState()

  useEffect(() => {
    fetch("/me").then((resp) => {
      if(resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  // useEffect(() => {
  //   fetch("/reviews")
  //   .then((resp) => resp.json())
  //   .then((reviews) => setEditReview(reviews))
  // }, [])

  if(!user) return <Login setUser={setUser} />


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
