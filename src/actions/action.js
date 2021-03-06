import {
  getLocationsAPI,
  addNewLocationAPI,
  deleteLocationAPI,
  editLocationAPI
} from '../services/apiServices'

// Add a location action
export const addNewLocationAction =(name,id)=>async dispatch=>{

  let location = {name:name, id:id}

  addNewLocationAPI(location).then(res=>{
    if(res) {
      if(res.status===200||res.status===201)
      dispatch({
        type:'ADD_NEW_LOCATION',
        payload: {id:id, name:name}
      })
    }
  })
}

// get all locations
export const getAllLocationAction = () => async dispatch =>{
  let locations = []

  getLocationsAPI().then(res=>{
    if(res) {
      if(res.status===200||res.status===201)
      locations = res.data;
      dispatch({
        type: 'GET_LOCATION_LIST',
        payload: locations
      })
    }
  })
}


// delete a location
export const deleteLocationAction = (name,id,i)=> async dispatch =>{

  deleteLocationAPI(id).then(res=>{

    if(res.status===200||res.status===201)
    dispatch({
      type: 'DELETE_LOCATION',
      payload : {name:name, id:id}
    })
  })
}

// edit an existing location
export const editExistingLocationAction = (location)=> async dispatch =>{

  console.log(location);
  editLocationAPI(location).then(res=>{
    console.log(res);
    dispatch({
      type: 'EDIT_EXISTING_LOCATION',
      payload : location
    })
  })
}

// push text into location text-feild for editing
export const editLocation = (name,id)=>{
  return({
    type: 'EDIT_LOCATION',
    payload : {name:name, id:id}
  })
}
