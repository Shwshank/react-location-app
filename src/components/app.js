import React from "react";

import Map from "./map/map";
import Location from "./location"

class App extends React.Component {

  render() {

    return(
      <div className="container-fluid">
        <div className="row" >
          <div className="col-lg-7 col-md-7 col-sm-12" >
            <Map/>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12" >
            <Location/>
          </div>
        </div>

      </div>
    )
  }
}

export default App
