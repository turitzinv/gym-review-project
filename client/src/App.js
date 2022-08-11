import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
