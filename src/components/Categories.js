import React, { Component } from "react";
import getData from "../actions/getData"
import { URLs } from '../constants/URLs';
import Carousel from './Carousel';
import MapContainer from "./Map";
import Navigation from './Navigation'


class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [],
                   category: 'books',
                  };
  }

  async componentDidMount() {
    const items = await getData(URLs.category + `${this.state.category}`);
    this.setState({ items })
  }
  changeCategory() {
  console.log('I ran!')
  }
  render(){
    console.log(this.state.items)
    return (
      <div>
      <Navigation/>
      <div>
      <Carousel category={this.state.category}/>
      </div>
      <div>
      <MapContainer items={this.state.items}/>
      </div>
      </div>
    )}
}

export default Items;
