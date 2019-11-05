import React, { Component } from "react";
import { Route } from 'react-router-dom';
import getData from "../actions/getData";
import { URLs } from '../constants/URLs';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    };
  }

  async componentDidMount() {
    const item = await getData(URLs.item + `${this.props.match.params.id}`);
    this.setState( {item} )
   }

render() {
    console.log(this.state)
    return (
      <Card style={{flex:1}} border="primary" bg ="info" className="card mb-4">
      <Card.Header>Name: { (this.state.item != undefined) ? this.state.item.name : null }</Card.Header>
      <Card.Img src='https://images.unsplash.com/photo-1572715655204-47e297d3b6dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt =''/>
      <Card.Body>
        <Card.Title>Description: { (this.state.item != undefined) ? this.state.item.description : null }</Card.Title>
        <Card.Title>Category: { (this.state.item != undefined) ? this.state.item.category : null }</Card.Title>
        <Card.Title>Deposit: £{ (this.state.item != undefined) ? this.state.item.deposit : null }</Card.Title>
        <Card.Title>Overdue Charge: £{ (this.state.item != undefined) ? this.state.item.overdue_charge : null }</Card.Title>
        <Button href= {`#request`} variant="dark">Request</Button>
      </Card.Body>
    </Card>
    );
  }
}

export default Item;
