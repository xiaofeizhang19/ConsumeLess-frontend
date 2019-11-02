import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { URLs } from '../constants/URLs';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = ({ target }, type) => {
    this.setState({
      ...this.state,
      [type]: target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target)
    console.log(data);
    
    fetch(URLs.login, {
      method: 'POST',
      body: data,
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="container">
        <h1>Welcome to Consume£e$$</h1>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={event => this.handleChange(event, "username")}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              name="password"
              autoComplete="password"
              value={password}
              onChange={event => this.handleChange(event, "password")}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </div>
    )
  }
}
