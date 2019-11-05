import React, { Component } from "react";
import Item from "./Item"
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'

class Items extends Component {
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
      <>
        <h4>Items to Borrow</h4>
        {this.state.data.map((item, i) => {
          return <Item item={item} key={i} />;
        })}
      </>
    );
  }
}

export default Items;