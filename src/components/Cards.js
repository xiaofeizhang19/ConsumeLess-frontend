import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Item from "./Item"
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'
import CardDeck from 'react-bootstrap/CardDeck'

export default class Cards extends Component {
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
            <div>

            </div>

        )
    }
}
