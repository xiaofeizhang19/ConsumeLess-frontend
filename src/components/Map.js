import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100vw',
  height: '60vh'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 51.51746,
         lng: -0.07329
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);
