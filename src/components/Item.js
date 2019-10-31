import React, { Component } from "react";

class Item extends Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
      const { user } = this.props;
      return (
        <li>
          Username: {user.username}
          <br />
          Email: {user.email}
        </li>
      );
    }
  }

  export default Item;