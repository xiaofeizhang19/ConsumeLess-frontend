import React, { Component } from 'react';
import Items from './Items';
import Item from './Item';

class Home extends Component {
  state = {
      item: null
  };

  selectItem = index => {
    const { item } = this.state.items

    this.setState({ item })
  }



}