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

export const editUser = user => {
  return {
    type: 'EDIT_USER',
    user
  }
}  

export const toggleView = () => {
  return {
    type: 'TOGGLE_VIEW'
  }
}