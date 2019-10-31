import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {Route, Switch, Link} from "react-router-dom";
import Items from './components/Items'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/items' component = {Items} />
        <Route exact path='/' component = {Home} />
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
