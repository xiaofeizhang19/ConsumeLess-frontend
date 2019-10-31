import React, { Component } from "react";
import Item from "./Item"
import getData from "../actions/getData"



const URLs = {
  item: "https://consumerless-backend.herokuapp.com/api/item/1",
  users: "https://pythonflaskbooks.herokuapp.com/getallusers",
}

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    const data = await getData(URLs.users);
    this.setState({ data })
  }

  render() {
    return (
      <p>
        {this.state.data.map((user, i) => {
          return <Item user={user} key={i} />;
        })}
      </p>
    );
  }
}

export default Items;