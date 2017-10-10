const API='http://api.openweathermap.org/data/2.5/forecast?zip=30080&appid=4a3c4bc9d31dac91a8a9fd212059b045&units=imperial';
export const addUser = user => {
    return {
      type: 'ADD_USER',
      user
    }
  }

export const updateUser = user => {
  return {
    type: 'UPDATE_USER',
    user
  }
}  

export const editUser = id => {
  return {
    type: 'EDIT_USER',
    id
  }
}  

export const toggleView = () => {
  return {
    type: 'TOGGLE_VIEW'
  }
}

export const loadInProgress = (loader) => {
  return {
    type: 'LOADING',
    loader
  }
}

export const apiData = (data) => {
  const { list } = data.data;
  return {
    type: 'API_LOADED',
    list
  }
}

const getData = () => {
  return fetch(API).then(res => res.json()).then(data => data);
}

export const postsFetchData = () => {
  return (dispatch) => {
      dispatch(loadInProgress(true));
      getData().then(data => {
        dispatch(loadInProgress(false));
        dispatch(apiData({data}))
      });
  };
}