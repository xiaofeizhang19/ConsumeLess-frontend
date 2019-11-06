import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import AuthService from './AuthService';
import Navigation from './Navigation';
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'

import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { MdGrade, MdEmail, MdLocationOn, MdAccountCircle } from 'react-icons/md';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {
        username: "",
        email: "",
        created_at: "",
      },
      // itemsOwn: {
      //   name: "",
      //   category: "",
      //   description: "",
      // }
    }
    this.Auth = new AuthService();
  }

  async componentDidMount() {
    const userId = this.Auth.getProfile().user_id;
    const user = await getData(URLs.user + `${userId}`);

    // const itemsOwn = await getData(URLs.itemsOwn);
    // console.log(itemsOwn);
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div><Navigation />
        <Jumbotron variant="primary">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Card style={{ width: '18rem' }} border="secondary">
                  <Card.Body>
                    <Card.Title><MdAccountCircle />  {user.username}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem><MdEmail />  {user.email}</ListGroupItem>
                    <ListGroupItem><MdLocationOn / >  London</ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>

              <Col xs={6} md={4}>
                <Card style={{ width: '18rem' }}  border="secondary">
                  <Image variant="top" src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60"
                    roundedCircle />
                </Card>
              </Col>
    
              <Col xs={6} md={4}>
                <Card style={{ width: '18rem' }}  border="secondary">
                  <Card.Body>
                    <Card.Title>User rating</Card.Title>
                  </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <MdGrade />
                        <MdGrade />
                        <MdGrade />
                        <MdGrade />
                        <MdGrade />
                      </ListGroupItem>
                      <ListGroupItem>Member since: {user.created_at}</ListGroupItem>
                    </ListGroup>
                </Card>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

          <Container>
          <Accordion>
          <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" className="profileItems">
                Items I Own
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body><ItemsOwn /></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" className="profileItems">
                Items I have Borrowed
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body><ItemsBorrowed /></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" className="profileItems">
                Items I am lending out
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body><ItemsLent /></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
    )  
  }  
}

const ItemsOwn = () => {
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nintendo Switch</td>
            <td>Amazing game</td>
            <td>Game</td>
            <td>Available</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

const ItemsBorrowed = () => {
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Borrowed From</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GoT</td>
            <td>Book</td>
            <td>Otto</td>
            <td>01/12/2019</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

const ItemsLent = () => {
  return (
    <p>Items I am lending out</p>
  )
}