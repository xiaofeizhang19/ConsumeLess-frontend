import React, { Component } from 'react'
import axios from 'axios'

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

    componentDidMount() {
      const url = 'https://pythonflaskbooks.herokuapp.com/getallusers'

      axios.get(url)
        .then(response => {
          console.log(response)
          this.setState({ data: response.data })
        })
    }

  render() {
    return (
      <p>
        {this.state.data.map(function(user, i){
          return (
            <li key={i}>Username: {user.username}<br></br>Email: {user.email}</li>
            )
        })}
      </p>
    )
  }
}
