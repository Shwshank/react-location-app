import React from 'react';
import { connect } from 'react-redux';

import { mapConfig } from '../../config';

import {
  editExistingLocationAction,
  deleteLocationAction
} from '../../actions/action'

class Map extends React.Component {
  constructor(props) {
    super(props);

    // load googleMapAPI script
    setTimeout(()=>{
      this.onScriptLoad = this.onScriptLoad.bind(this)
    }, 1500);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 51.1657, lng: 10.4515 },
      zoom: 7
    });
      var geocoder = new window.google.maps.Geocoder();
      this.geocodeAddress(geocoder, map)
  }

  // Geocode markers for each location address
  geocodeAddress=(geocoder, resultsMap)=>{

    this.props.locationArray.map(location=>{

        geocoder.geocode({
          'address': location.name,
          'componentRestrictions': {
            'country': 'DE'
          }
        }, (results, status)=>{
          console.log(status);
          if (status === 'OK') {

            location.lat = results[0].geometry.location.lat()
            location.lng = results[0].geometry.location.lng()

            // Update existing location with lat, lng
            this.props.editExistingLocationAction(location)

            resultsMap.setCenter(results[0].geometry.location);
            var marker = new window.google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {

            // delete location if dosent exists in germany
            this.props.deleteLocationAction(location.name, location.id)
            alert('Unable to find location with in Germany. Geocode was not successful for the following reason: ' + status);
          }
        });
      })
  }

  // init googleMapAPI
  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = mapConfig.mapApi+mapConfig.mapKey;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (
      <div style={{ height: 600 }} id="map" />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    locationArray: state.getLocationReducre
   };
};

export default connect(
  mapStateToProps,
  {editExistingLocationAction,
  deleteLocationAction}
)(Map);
