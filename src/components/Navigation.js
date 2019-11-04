import { BrowserRouter as  Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register'
import Login from './Login'
import Items from './Items'
import NewItem from './NewItem';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <div>
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
        <LinkContainer to='/items/new'>
        <NavDropdown.Item >Add New Item</NavDropdown.Item>
        </LinkContainer>
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
        )
    }
}
