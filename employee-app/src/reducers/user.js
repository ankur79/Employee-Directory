import dataset from '../utils/dataset';

const initialState = {
  empData: dataset, 
  editView: false, 
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
  debugger
    switch (action.type) {
      case 'ADD_USER':
        state.empData.push(action.user) 
        return {...state, editView: false}    
      case 'UPDATE_USER':
        const index = state.empData.findIndex(item => item.id === action.user.id);
        state.empData[index] = action.user;
        return {...state, editView: false, newUser: true, empProfile: initialState.empProfile}  
      case 'TOGGLE_VIEW':
        return {...state, editView: !state.editView}  
      case 'EDIT_USER':
        return {...state, empProfile: action.user,  editView: !state.editView, newUser: false, showModal: true}                               
      default:
        return state
    }
  }
  
  export default user