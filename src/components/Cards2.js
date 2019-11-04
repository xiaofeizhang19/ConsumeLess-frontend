import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'


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
        return (
          <div>
            {this.state.data.map((item, index) => {
              return (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
               
              )  
            }
          )}
      </div>
      )
    }
}