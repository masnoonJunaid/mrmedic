import React from 'react'
import styled from "styled-components"
import {Map,GoogleApiWrapper,Marker } from 'google-maps-react';

const mapStyles = {
  width:'75%',
  height:'100%',
}

class  MapBox  extends React.Component {
 render(){
   return (
       <MapWrapper id="map-wrapper">
         <Map
           className="maps"
           google = {this.props.google}
           zoom =  {13}
           initialCenter = {{  lat: 22.575393, lng: 88.47979}}
           style = {mapStyles}
           />
       </MapWrapper>

   )
 }
}

const MapWrapper = styled.div`
.maps{
 margin-top:5vh;
 margin-left:25%;
 float: left;

}

@media screen and (max-width:648px){
 .maps{
   width:100%;
   margin-left:0%;

 }
}


`

export default GoogleApiWrapper({
 apiKey: 'AIzaSyAcyPTUUECGcXAoDgx5YSSbmkJF0UZBIpU&v=3'
})(MapBox);
