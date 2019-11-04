import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Item from "./Item"
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'

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
        return (
          <div>
            {this.state.data.map((item, index) => {
              return (<div key={index} className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <img src='https://www.decathlon.co.uk/media/837/8378535/big_1638914.jpg' alt =''/>
                    <div className="card-body">
                      <h5 className="card-title">{ item.name }</h5>
                      <h5 className="card-title">Description: { item.description}</h5>
                    </div>
                </div>
              </div> )  
            }
          )}
      </div>
      )
    }
}