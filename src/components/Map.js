import React, { Component } from 'react';
import { InfoWindow, Marker, Map, GoogleApiWrapper } from 'google-maps-react';
import AuthService from './AuthService';
import { URLs } from '../constants/URLs';
import getData from "../actions/getData";

const mapStyles = {
  width: '100vw',
  height: '60vh'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markers:[],
      lat: null,
      lng: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      items:[]
    };
    this.Auth = new AuthService();
    // this.catItems = this.catItems.bind(this);
  }
  // state = {
  //   showingInfoWindow: false,
  //   activeMarker: {},
  //   selectedPlace: {}
  // };

  async componentDidMount(){
    const items = await getData(URLs.catItems);
    console.log('1')
    console.log(this.state.items)
    console.log('2')
    // this.state.items = this.setState( { items: items } )
    // console.log(this.state.items[1].latitude)
    // console.log(this.state.items[1].longitude)
    console.log('3')
    this.state.lat = items[1].latitude
    this.state.lng = items[1].longitude
    let marker = { lat: this.state.lat, lng: this.state.lng }
    let tempMarks = []
    tempMarks.push(marker)
    this.setState( { items: items,
                      markers: tempMarks })
    console.log('4')
    console.log(marker)
    console.log('5')
    console.log(this.state.markers)
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  render() {
    console.log(this.state.markers)
    let icon = {
      url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
    }
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 51.51746,
         lng: -0.07329
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          icon={icon}
          name={'Kenyatta International Convention Centre'}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Test Marker'}
          position={ this.state.markers[0] }
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div><h4>Nearly</h4></div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDfkHZsny6TVUsJjoS-Jo3okXAhEKYMtCM'
})(MapContainer);
