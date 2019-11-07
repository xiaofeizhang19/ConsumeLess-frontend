import React, { Component } from 'react';
import { InfoWindow, Marker, Map, GoogleApiWrapper } from 'google-maps-react';
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
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      items: this.props.items
    };
    // this.catItems = this.catItems.bind(this);
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
    const { items } = this.props;
    this.state.items.map((item)=>{ console.log(item.longitude) })
    console.log(items)
    let icon = {
      url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
    }
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
         lat: 51.51746,
         lng: -0.07329
        }}
      >
      {items.map((item, i) => {
        return (
          <Marker name={ item.name } position={{lat: item.latitude, lng: item.longitude}} key={i} />
        )
      })}
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
