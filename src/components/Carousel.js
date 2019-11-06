import React, { Component } from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
import Card from 'react-bootstrap/Card'
import { LinkContainer } from 'react-router-bootstrap';

export default class Carousel extends Component {
    render() {
        return (
            <div>
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
      <div className="container">
      <Card style={{ width: '18rem' }} border="secondary" bg="">
  <Card.Body>
  <Card.Header bg="info"> <Card.Title>Books</Card.Title></Card.Header>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    <Card.Text className="text-center">
      Find your favourite books here, anything from fiction all the way to non-fiction
    </Card.Text>
    <LinkContainer to="/categories/books">
        <Card.Link >View Available Books</Card.Link>
    </LinkContainer>
  </Card.Body>
</Card>
      </div>
      <Card style={{ width: '18rem' }} border="secondary" bg="">
  <Card.Body>
  <Card.Header bg="info"> <Card.Title>Clothes</Card.Title></Card.Header>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    <Card.Text className="text-center">
      Still wearing that GAP jumper from 2006? Stop embarrasing yourself here
    </Card.Text>
    <LinkContainer to="/categories/clothes">
        <Card.Link >View Available Clothes</Card.Link>
    </LinkContainer>
  </Card.Body>
</Card>
      <div>
      <Card style={{ width: '18rem' }} border="secondary" bg="">
  <Card.Body>
  <Card.Header bg="info"> <Card.Title>Games</Card.Title></Card.Header>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    <Card.Text className="text-center">
      The outdoors is overrated. Keep yourself inside away from the bugs with these board games.
    </Card.Text>
    <LinkContainer to="/categories/games">
        <Card.Link >View Available Games</Card.Link>
    </LinkContainer>
  </Card.Body>
</Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }} border="secondary" bg="">
  <Card.Body>
  <Card.Header bg="info"> <Card.Title>Music</Card.Title></Card.Header>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    <Card.Text className="text-center">
      Tired of peace and quiet and need a drumset for your child? Click here 
    </Card.Text>
    <LinkContainer to="/categories/music">
        <Card.Link >View Available Music</Card.Link>
    </LinkContainer>
  </Card.Body>
</Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }} border="secondary" bg="">
  <Card.Body>
  <Card.Header bg="info"> <Card.Title>Garden & Home</Card.Title></Card.Header>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    <Card.Text className="text-center">
      Run out of dough and need to mow but don't know where to go? Click below
    </Card.Text>
    <LinkContainer to="/categories/garden">
        <Card.Link >View Available Garden and Home Items</Card.Link>
    </LinkContainer>
  </Card.Body>
</Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }} border="secondary" bg="">
  <Card.Body>
  <Card.Header bg="info"> <Card.Title>Toys</Card.Title></Card.Header>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1520627977056-c307aeb9a625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    <Card.Text className="text-center">
      Train your children to play by themselves with a variety of toys. (Safety cannot be guaranteed).
    </Card.Text>
      <LinkContainer to="/categories/toys">
        <Card.Link >View Available Toys</Card.Link>
      </LinkContainer>
  </Card.Body>
</Card>
      </div>
    </InfiniteCarousel>
    </div>
    </div>
        )
    }
}