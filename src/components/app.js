import React from "react";

import Map from "./map/map";
import Location from "./location"

class App extends React.Component {

  render() {

    return(
      <div className="container-fluid" data-test="main-container">
        <div className="row" >
          <div className="col-lg-7 col-md-7 col-sm-12" >
            <Map data-test="map-component-initialized"/>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12" >
            <Location  data-test="location-component-initialized"/>
          </div>
        </div>

      </div>
    )
  }
}

export default App
