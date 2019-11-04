import React, { Component } from "react";
import Cards from "./Cards"
import getData from "../actions/getData"
import { URLs } from '../constants/URLs'
// import InfiniteCarousel from 'react-leaf-carousel';


export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    const data = await getData(URLs.items);
    this.setState({ data })
  }

  render(){
    return (
      < Cards />
    )
  } 
}



// <InfiniteCarousel
// breakpoints={[
//   {
//     breakpoint: 500,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 2,
//     },
//   },
//   {
//     breakpoint: 768,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 3,
//     },
//   },
// ]}
// dots={true}
// showSides={true}
// sidesOpacity={.5}
// sideSize={.1}
// slidesToScroll={4}
// slidesToShow={4}
// scrollOnDevice={true}
// >
// <div>
//   <ul>
//   <li>
//     {Cards.each(function(item){
//          item
//     })}
//     </li>
//   </ul>
// </div>


// </InfiniteCarousel>
