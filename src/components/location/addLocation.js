import React from "react";

class AddLocation extends React.Component {

  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      name: props.location.name,
      id: props.location.id
    }
    console.log(this.state);
  }

  nameChanged = async event => {
    await this.setState({
      name: event.target.value
    });
  };

  saveInfo = async()=>{
    // await this.setState({
    //   id: this.state.id===0||this.state.id===""? Math.floor(Math.random()*(893)+101) : this.state.id
    // })

    this.props.onSubmit(this.state);
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
        type="text"
        value = {this.state.name}
        onChange = {this.nameChanged}
        placeholder = "Name"
        />

        <button className="btn btn-success mb-2"
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
