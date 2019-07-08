import React from "react";
import { connect } from 'react-redux';

import AddLocation from "./addLocation";
import {
  addNewLocationAction,
  getAllLocationAction,
  editLocation,
  deleteLocationAction,
  editExistingLocationAction
} from '../../actions/action'

class ListLocation extends React.Component {

  componentWillMount() {

    // network call to get locations
    this.props.getAllLocationAction()

    // initialized location values as default eg: name, id
    this.props.editLocation("",0)
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  saveInfo=(loc)=>{

    // If submited location dosent have an id, means location already
    // present in the db. If location isn't in db, generate rendom id
    // & save the location. Else id exists, update location name
    if(loc.id===""||loc.id===0) {
      loc.id = Math.floor(Math.random()*(893)+101)
      this.props.addNewLocationAction(loc.name, loc.id)
    } else {
      this.props.editExistingLocationAction(loc)
    }
    window.location.reload()
  }

  editLocation=(location)=>{
    this.props.editLocation(location.name,location.id)
    window.location.reload()
  }

  deleteLocation=(location,i)=>{
    this.props.deleteLocationAction(location.name, location.id, i)
    window.location.reload()
  }

  renderAddLocation = () =>{
    return(
      <AddLocation
        location = {this.props.location}
        onSubmit = {this.saveInfo}
      />
    )
  }

  // shortern lat, lng decimals
  trimData=(data)=>{
    data +=""
    let temp = data.substring(0, 7);
    return(
      <div>
        {temp}
      </div>
    )
  }

  // locations are being render according to template
  renderLocation=()=>{
    let i=0;

    return this.props.locationArray.map( location =>{
      i++
      return(

        <div className="col-6 col-sm-6 p-2 float-left" >

          <div key={location.id} className="card">
            <div className="card-body" >

              <div className="card-title">
                {i}. <b> {location.name} </b> <br/>
              </div>
              <div className="card-subtitle mb-2 text-muted">
                {this.trimData(location.lat)}
                {this.trimData(location.lng)}
              </div>
              <hr/>
              <a href="#" className="card-link"
                onClick={this.editLocation.bind(this,location)}>
                edit
              </a>
              &nbsp;&nbsp;
              <a href="#" className="card-link"
                onClick={this.deleteLocation.bind(this,location,(i-1))}>
                delete
              </a>
            </div>
          </div>
        </div>
      )
      }
    )
  }

  render() {
    return(
      <div>

        <div>
          {this.renderAddLocation()}
        </div>

        <div>
          {this.renderLocation()}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    location: state.editLocationReducer,
    locationArray: state.getLocationReducre
   };
};


export default connect(
  mapStateToProps,
  {addNewLocationAction,
    getAllLocationAction,
    editLocation,
    deleteLocationAction,
    editExistingLocationAction}
)(ListLocation);
