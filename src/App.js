import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register'
import Login from './components/Login'
import Items from './components/Items'
import NewItem from './components/NewItem';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



function App() {
  return (
    <div className="App">
      <div >
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <Navbar.Brand>Consume£e$$</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/items">
      <Nav.Link eventKey={1}>Items</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/register">
      <Nav.Link eventKey={2}>Register</Nav.Link>
    </LinkContainer>
      <NavDropdown title="More Links" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <LinkContainer to ="/">
      <Nav.Link eventKey={3}>Login</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
     
        <Switch>
        <Route exact path='/' component = {Login} />
        <Route exact path='/register' component = {Register} />
        <Route exact path='/items' component = {Items} />
        <Route exact path='/items/new' component = {NewItem} /> 
        </Switch>
         
    </div>
    </div>
  );
}

export default App;
