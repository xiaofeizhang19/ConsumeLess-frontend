import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Item extends Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
      const { item } = this.props;
      return (      
        <div className="col-md-6 col-lg-4">
          <Card style={{flex:1}} border="primary" bg ="info" className="card mb-4">
            <Card.Header>{ item.name }</Card.Header>
            <Card.Img src='https://images.unsplash.com/photo-1572715655204-47e297d3b6dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt =''/>
            <Card.Body>
              <Card.Title>{ item.description }</Card.Title>
              <Card.Title>{ item.category }</Card.Title>
              <Card.Title>{ item.id }</Card.Title>
              <Button href= {`/item/${item.id}`} variant="dark">View Item</Button>
            </Card.Body>
          </Card>
        </div>
      )  
    }
  }

  export default Item;
