import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register'
import Login from './components/Login'
import Items from './components/Items'
import AddItem from './components/AddItem'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/' component = {Login} />
        <Route exact path='/register' component = {Register} />
        <Route exact path='/items' component = {Items} />
        <Route exact path='/items/new' component = {AddItem} /> 
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
