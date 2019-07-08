import React from "react";

class AddLocation extends React.Component {

  // props from parent component
  constructor(props) {
    super(props)
    this.state = {
      name: props.location.name,
      id: props.location.id
    }
  }

  // location-text change event
  nameChanged = async event => {
    await this.setState({
      name: event.target.value
    });
  };

  // submit edited location
  saveInfo = async()=>{
    this.props.onSubmit(this.state);

    // init state calues to default
    this.setState({
      name:"",
      id:""
    })
  }

  render() {
    return(
      <div  className="form-group mb-2">
        <h4> Add a location</h4>
        <input className="form-control m-2 p-2"
        data-test="location-text-box"
        type="text"
        value = {this.state.name}
        onChange = {this.nameChanged}
        placeholder = "Name"
        />

        <button className="btn btn-success mb-2"
        data-test="location-submit-button"
        onClick={this.saveInfo.bind(this)}>
        Save location
        </button>

        <br/>
        <br/>
        <br/>

      </div>
    )
  }
}

export default AddLocation
