import React, { Component } from "react";
import Item from "./Item"
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'
import InfiniteCarousel from 'react-leaf-carousel';
import Card from 'react-bootstrap/Card'

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
     <div>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={true}
          showSides={true}
          sidesOpacity={.5}
          sideSize={.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
          <div>
          <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
          </div>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1572810927917-ba2f43b123c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            />
          </div>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1572670820893-4a786f928de3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            />
          </div>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1572823622654-4504745b2402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            />
          </div>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1572823622654-4504745b2402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            />
          </div>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1572823622654-4504745b2402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            />
          </div>
        </InfiniteCarousel>
        </div>
    );
  }
}

export default Items;

