import React, { Component } from "react";
import getData from "../actions/getData"
import { URLs } from '../constants/URLs';
import Carousel from './Carousel';
import MapContainer from "./Map";
import Navigation from './Navigation'


class Items extends Component {
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
      <div>
      <Navigation/>
      <div>
      < Carousel/>
      <br/>
      < MapContainer/>
      </div>
      </div>
    )}
}

export default Items;
