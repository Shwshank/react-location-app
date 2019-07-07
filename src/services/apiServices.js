import baseURL from './baseURL';

export const getLocationsAPI = async() =>{
  try{
    const response = await baseURL.get('/locations');
    return response
  } catch(err) {
    console.log(err);
    alert(err)
  }
}

export const addNewLocationAPI = async(location) =>{
  try{
    const response = await baseURL.post('/locations', location);
    return response;
  } catch(err) {
    console.log(err);
    alert(err)
  }
}

export const deleteLocationAPI = async(index) =>{
  const response = await baseURL.delete('/locations/'+index);
  return response;
}

export const editLocationAPI = async(location) =>{
  const response = await baseURL.put('/locations/'+location.id, {name:location.name, lat:location.lat, lng:location.lng});
  return response;
}
