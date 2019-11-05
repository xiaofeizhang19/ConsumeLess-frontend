import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import Navigation from './components/Navigation';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Items from './components/Items';
import NewItem from './components/NewItem';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Navigation />
      <Switch>
        <Route exact path='/' component = {App} />
        <Route exact path='/login' component = {Login} />
        <Route exact path='/register' component = {Register} />
        <Route exact path='/profile' component = {Profile} />
        <Route exact path='/items' component = {Items} />
        <Route exact path='/items/new' component = {NewItem} /> 
      </Switch> 
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
