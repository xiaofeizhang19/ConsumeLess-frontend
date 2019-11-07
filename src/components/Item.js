import React, { Component } from "react";
import { Route } from 'react-router-dom';
import getData from "../actions/getData";
import { URLs } from '../constants/URLs';
import { CategoryPics } from '../constants/CategoryPics';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AuthService from './AuthService';
import Link from '@material-ui/core/Link';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
    this.Auth = new AuthService();
    this.makeRequest = this.makeRequest.bind(this);
  }

  makeRequest(event) {
    event.preventDefault();
    const payload = new FormData(event.target)
    console.log(payload)

    this.Auth.bookItem(payload)
      .then(res => this.props.history.replace('/categories'))
      .catch(error => alert(error))
  }

  async componentDidMount() {
    const item = await getData(URLs.item + `${this.props.match.params.id}`);
    this.setState( {item} )
   }

render() {
  const category = this.state.item.category
    return (
      <Card style={{flex:1}} border="primary" bg ="info" className="card mb-4">
      <Card.Header>Name: { (this.state.item != undefined) ? this.state.item.name : null }</Card.Header>
      <Card.Img src={ CategoryPics[category] } alt =''/>
      <Card.Body>
        <Card.Title>Description: { (this.state.item != undefined) ? this.state.item.description : null }</Card.Title>
        <Card.Title>Category: { (this.state.item != undefined) ? this.state.item.category : null }</Card.Title>
        <Card.Title>Deposit: £{ (this.state.item != undefined) ? this.state.item.deposit : null }</Card.Title>
        <Card.Title>Overdue Charge: £{ (this.state.item != undefined) ? this.state.item.overdue_charge : null }</Card.Title>
        <form onSubmit={this.makeRequest}>
        <input
          type='hidden'
          name='item_id'
          value={ (this.state.item != null) ? this.state.item.id : null }
          />
          <label>Days you want to borrow for</label>
          <input name='return_by' type='number'/>
          <button>request item</button>
          <br />
          <Link href="/categories" variant="body2">
            {"Back"}
          </Link>
        </form>
      </Card.Body>
    </Card>
    );
  }
}

export default Item;
