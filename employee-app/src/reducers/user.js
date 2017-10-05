import dataset from '../utils/dataset';

const initialState = {
  empData: dataset, 
  empProfile: {
    "id": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "gender": "",
    "ip_address": ""
  },
  newUser: true,
  showModal: false
}

const user = (state = initialState, action) => {
  console.log(action)
    switch (action.type) {
      case 'UPDATE_USER':
        if(state.newUser){
          state.empData.push(action.user) 
          return {...state}  
        }else{
          const index = state.empData.findIndex(item => item.id === action.user.id);
          state.empData[index] = action.user;
          return {...state, newUser: true, empProfile: initialState.empProfile}  
        }
      case 'EDIT_USER':
        return {...state, newUser: action.id !== undefined ? false : true}                               
      default:
        return state
    }
  }
  
  export default user