import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Items from './components/Items'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/items' component = {Items} />
        <Route exact path='/' component = {Login} />
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
