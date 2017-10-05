import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, editUser } from './actions'
import { push } from 'react-router-redux'

class Profile extends Component {
  state = {
    localProfile: this.props.empProfile
  }
  componentDidMount(){
    const { match, onEditUser } = this.props;
    onEditUser(match.params.id)
    if(match.params.id){
      this.userToEdit(match.params.id);
    }
  }
  userToEdit(id){
    const user = this.props.empData.filter(user => user.id === Number(id));
    this.setState({localProfile: user[0]});
  }  
  fieldChange(e){
    const { localProfile } = this.state;
    const updatedProfile = {...localProfile, [e.target.name]: e.target.value};
    this.setState({localProfile: updatedProfile});
  }
  saveData(localProfile){
    this.props.onUpdateUser(localProfile);
    this.props.onSaveChange();
  }
  render() {
    const { localProfile } = this.state;
    return (
        <div  className="empProfile"><div>
          <label>First Name</label>
          <input type="text" onChange={(e) => this.fieldChange(e)} name="first_name" value={localProfile.first_name}/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" onChange={(e) => this.fieldChange(e)} name="last_name" value={localProfile.last_name}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" onChange={(e) => this.fieldChange(e)} name="email" value={localProfile.email}/>
        </div>  
        <button onClick={() => this.saveData(localProfile)}>save</button>
        <button>cancel</button></div> 
    );
  }
}

const mapStateToProps = state => {
  return {
    empProfile: state.user.empProfile,
    empData: state.user.empData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateUser: user => {
      dispatch(updateUser(user))
    },
    onEditUser: id => {
      dispatch(editUser(id))
    },
    onSaveChange: () => {
      dispatch(push("/"));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
