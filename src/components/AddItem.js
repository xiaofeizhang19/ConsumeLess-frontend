import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { URLs } from '../constants/URLs'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
      category: "",
      overdueCharge: "",
      deposit: ""
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

    const data = new FormData(event.target);
    let jsonObject = {};
    for (const [key, value]  of data.entries()) {
      jsonObject[key] = value;
    }
    console.log(jsonObject);
    
    var url = URLs.newItem;
    fetch(url, {
      method: 'POST',
      body: jsonObject,
    })
      .then(response => console.log(response))
      .catch(error => console.error(error))
  }

  render() {
    const { name, email, description, category, overdueCharge, deposit } = this.state;

    return (
      <div className="container">
        <h3>Add a new item</h3>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={event => this.handleChange(event, "name")}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={event => this.handleChange(event, "email")}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="5"
              id="description"
              name="description"
              value={description}
              onChange={event => this.handleChange(event, "description")}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={event => this.handleChange(event, "category")}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Overdue charge per day</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              min="0"
              id="overdueCharge"
              name="overdueCharge"
              value={overdueCharge}
              onChange={event => this.handleChange(event, "overdueCharge")}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Deposit</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              min="0"
              id="deposit"
              name="deposit"
              value={deposit}
              onChange={event => this.handleChange(event, "deposit")}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}