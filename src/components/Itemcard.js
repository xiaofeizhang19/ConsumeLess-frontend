import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Itemcard extends Component {
    render() {
      const { itemcard } = this.props;
      return (
          <Card style={{flex:1}} border="primary" bg ="info" className="card mb-4">
            <Card.Header>{ itemcard.name }</Card.Header>
            <Card.Img src='https://images.unsplash.com/photo-1572715655204-47e297d3b6dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt =''/>
            <Card.Body>
              <Card.Title>{ itemcard.description }</Card.Title>
              <Card.Title>{ itemcard.category }</Card.Title>
              <Card.Title>{ itemcard.id }</Card.Title>
              <Button href= {`/item/${itemcard.id}`} variant="dark">View Item</Button>
            </Card.Body>
          </Card>
      )
    }
  }

  export default Itemcard;
