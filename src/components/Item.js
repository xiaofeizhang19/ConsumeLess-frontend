import React, { Component } from "react";

class Item extends Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
      const { item } = this.props;
      return (
        <li>
          Name: { item.name }
          <br />
          Category: { item.category }
          <br />
          Description: { item.description }
          <br />
          Overdue charge per day: { item.overdue_charge }
          <br />
          Deposit: { item.deposit }
        </li>
      );
    }
  }

  export default Item;