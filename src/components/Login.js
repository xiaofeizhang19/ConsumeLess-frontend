import React, { Component } from "react";

class Login extends Component {
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
    
    const url = "http://localhost:1337/myfile.html"
    fetch(url, {
      method: 'POST',
      body: data,
      mode: 'no-cors',
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={event => this.handleChange(event, "username")}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="password"
          value={password}
          onChange={event => this.handleChange(event, "password")}
        />
        <br />
        <button type="submit">Log In</button>
      </form>
    );
  }
}

export default Login;