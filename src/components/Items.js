import React, { Component } from "react";
import Navigation from "./Navigation";
import Cards from "./Cards";
import getData from "../actions/getData";
import { URLs } from '../constants/URLs';
// import InfiniteCarousel from 'react-leaf-carousel';


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
      <div><Navigation />
      <div className = "container">
      <h1>Items</h1>
      < Cards />
      </div>
      </div>
    )
  }
}
