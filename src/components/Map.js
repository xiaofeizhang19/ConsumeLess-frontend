import React, { Component } from 'react';
import { InfoWindow, Marker, Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100vw',
  height: '60vh'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

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
