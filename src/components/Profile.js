import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import AuthService from './AuthService';
// import getData from "../actions/getData"
// import { URLs } from '../constants/URLs'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      created_at: ""
    }
    this.Auth = new AuthService();
  }

  // async componentDidMount() {
  //   const token = this.Auth.getProfile();
  //   const user = await getData(URLs.user + `?token=${token}`);
  //   // console.log(user);
  //   this.setState({ user })
  // }

  render() {
    return (
      <div className="Container">
        <h3>Hello user</h3>
        <Table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Location</th>
            <th>Member since</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Arya_Stark</td>
            <td>arya@email.com</td>
            <td>Winterfell</td>
            <td>01-11-2019</td>
          </tr>
        </tbody>
      </Table>
      </div>
    )  
  }  
}