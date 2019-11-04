import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'



export default class Cards extends Component {
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
          
          <div>
            
            {this.state.data.map((item, index) => {
              return (
             
              <div key={index} className="col-md-6 col-lg-4">
                <Card style={{flex:1}} border="primary" bg ="info" className="card mb-4">
                  <Card.Header>{ item.name }</Card.Header>
                    <Card.Img src='https://images.unsplash.com/photo-1572715655204-47e297d3b6dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt =''/>
                      <Card.Body>
                        <Card.Title>{ item.name }</Card.Title>
                        <Card.Title>{ item.description }</Card.Title>
                        <Button href= {`/items/${item.id}`} variant="dark">View Item</Button>
                      </Card.Body>
                </Card>
                </div>
               
              )  
            }
          )}
      </div>
     
      )
    }
}