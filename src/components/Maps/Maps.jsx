import React, { Component } from 'react';
import './styles.scss'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function getLocation(){
  var x;
  
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="Seu browser não suporta Geolocalização.";}
  
function showPosition(position)
  {
    const l = position.coords.latitude ;
    const lo = position.coords.longitude; 

   
  }
  
}

export class MapContainer extends Component {
 
 


  constructor(props,position ,l ,lo) {
    super(props,position);
    
    this.state = {
      stores: [
        { latitude: position.l, longitude: position.lo}]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
      />
    })
  }

  render() {
    return (
<div className='maps' >
      <Map
        google={this.props.google}
        zoom={7}
        initialCenter={{ lat: -27.0922364, lng: -52.6166878 }}
      >

        {this.displayMarkers()}
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyCzB6KGN1Utv_wJUSQqVbU1U2__34yKhh4',
  }
  ))(MapContainer)