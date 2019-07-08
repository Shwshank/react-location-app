import _ from 'lodash';
import { combineReducers } from 'redux';

const getLocation = (state=[], action) =>{

  switch(action.type) {

    case 'GET_LOCATION_LIST': {
        state = action.payload
        // state = _.orderBy(action.payload, 'id')
        return [...state]
    }

    case 'ADD_NEW_LOCATION': {

      let index = _.findIndex(state, {id:action.payload.id})
      if( index=== -1 ) {
        state.push(action.payload)
      } else {
        state[index] = action.payload
      }
      return [...state]
    }

    case 'DELETE_LOCATION':{
      let index = _.findIndex(state, {id:action.payload.id})
      if( index=== -1 ) {
        return [...state]
      } else {
        state.splice(index, 1)
      }
      return [...state]
    }

    case 'EDIT_EXISTING_LOCATION': {
      let index = _.findIndex(state, {id:action.payload.id})
      if( index=== -1 ) {
        return [...state]
      } else {
        state[index] = action.payload
      }

      return [...state]
    }

    default:{
      return [...state]
    }
  }
}

const editLocation = (state={name:"", id:""}, action) =>{
  switch (action.type) {
    case 'EDIT_LOCATION': {
      state = action.payload
      return state
    }
    default: {
      return state
    }

  }
}

export default combineReducers({
  getLocationReducre: getLocation,
  editLocationReducer: editLocation
})
