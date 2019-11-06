import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import AuthService from './AuthService';
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {
        username: "",
        email: "",
        created_at: "",
    } }
    this.Auth = new AuthService();
  }

  async componentDidMount() {
    const userId = this.Auth.getProfile().user_id;
    const user = await getData(URLs.user + `${userId}`);
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="Container">
        <h3>Hello </h3>
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
            <td>{ user.username }</td>
            <td>{ user.email }</td>
            <td>London</td>
            <td>{ user.created_at }</td>
          </tr>
        </tbody>
      </Table>
      </div>
    )  
  }  
}