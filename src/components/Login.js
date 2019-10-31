import React, { Component } from "react";
import ReactDOM from "react-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }, type) => {
    this.setState({
      ...this.state,
      [type]: target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target)
    const data = "hello"
    const url = "http://localhost:1337/myfile.html"
    fetch(url, {
      method: 'POST',
      body: data,
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <form>
        <label>Username:</label>
        <input
          id="username"
          value={username}
          onChange={event => this.handleChange(event, "username")}
        />
        <br />
        <label>Password:</label>
        <input
          id="password"
          type="password"
          autoComplete="password"
          value={password}
          onChange={event => this.handleChange(event, "password")}
        />
        <br />
        <input type="button" value="Log In" onClick={this.handleSubmit} />
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default Login;