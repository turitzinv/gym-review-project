import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/loginpage">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
