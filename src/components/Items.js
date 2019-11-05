import React, { Component } from "react";
import { Route } from 'react-router-dom';
import Itemcard from "./Itemcard"
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    const items = await getData(URLs.items);
    this.setState({ items })
    console.log("me too")
  }

  render(){
    console.log(this.state.items)
    console.log("i'm running 1")
    return (
      <div className="col-md-6 col-lg-4">
        {this.state.items.map((itemcard, i) => {
          return (
            <Itemcard itemcard={itemcard} key={i} />
          )
        })}
        </div>
    );
  }
}

export default Items;
