import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { URLs } from '../constants/URLs'
import { Redirect } from 'react-router-dom';

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
      category: "",
      overdue_charge: "",
      deposit: "",
      redirect: false
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

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/items' />
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    fetch(URLs.newItem, {
      method: 'POST',
      body: data,
    })
      .then(response => response.json())
      // console.log(response.json())
      .then(data => {
        // console.log(data)
        this.setRedirect()
        this.renderRedirect()
      })
      .catch(error => alert(error))
  }

  render() {
    const { name, email, description, category, overdueCharge, deposit } = this.state;

    return (
      <div className="container">
        <h3>Add a new item</h3>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Item name</Form.Label>
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
            <Form.Control as="select"
              id="category"
              name="category"
              value={category}
              onChange={event => this.handleChange(event, "category")}>
              <option>--Select Category--</option>
              <option value="books">Books</option>
              <option value="clothes">Clothes</option>
              <option value="equitment">Garden/Building equipment</option>
              <option value="games">Games</option>
              <option value="music">Music</option>
              <option value="toys">Toys</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Overdue charge per day</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              min="0"
              id="overdue_charge"
              name="overdue_charge"
              value={overdueCharge}
              onChange={event => this.handleChange(event, "overdue_charge")}/>
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
          {this.renderRedirect()}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
