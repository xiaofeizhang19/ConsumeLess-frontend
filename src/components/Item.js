import React, { Component } from "react";
import { Route } from 'react-router-dom';
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    };
  }

  async componentDidMount() {
    console.log(this.props)
    const item = await getData(URLs.item);
    console.log(item)
    this.setState({ item })
    console.log(this.state.item)
  }

  render() {
    return (
      <div>
        <p>{ this.state.item } </p> 
      </div>
    );
  }
}

export default Item;
