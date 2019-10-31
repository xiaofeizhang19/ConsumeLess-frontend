import React from 'react';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Items from './components/Items'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component = {Login} />
          <Route exact path='/items' component = {Items} />
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
