import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './components/Items'
import Login from './components/Login'
import AddItem from './components/AddItem'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/items' component = {Items} />
        <Route exact path='/items/new' component = {AddItem} />
        <Route exact path='/' component = {Login} />
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
