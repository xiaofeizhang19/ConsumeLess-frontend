import React, { Component } from "react";
import Item from "./Item"
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'
import InfiniteCarousel from 'react-leaf-carousel';
import Card from 'react-bootstrap/Card'

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    const data = await getData(URLs.items);
    this.setState({ data })
  }

  render(){
    return (

          <div className="container">
      <div className="card-body">
      {this.state.data.map((item, i) => {
       return <Card style={{ width: '18rem' }}>
       <Card.Body><Item item={item} key={i} />;
       </Card.Body>
       </Card>
      })}
      </div>
      </div>
         
      
    )
  } 
}

