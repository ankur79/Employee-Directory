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