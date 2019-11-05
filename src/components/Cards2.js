import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'
import Item from './Item'
import CardDeck from 'react-bootstrap/CardDeck'

export default class Cards2 extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
      }
    
      async componentDidMount() {
        const data = await getData(URLs.items);
        this.setState({ data })
      }

    render() {
      {console.log(this.state.data)}
      return (
            
            <div className="container">
             <Card bg="info" text="white" className="text-center" border="primary" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1572715655204-47e297d3b6dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <Card.Body>
                  <Card.Title>Hello</Card.Title>
                    <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              
              </div>
          )
    }
}