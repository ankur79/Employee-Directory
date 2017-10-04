import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, updateUser } from './actions'

class Profile extends Component {
  state = {
    localProfile: {}
  }
  componentDidMount(){
    this.setState({localProfile: this.props.empProfile});
  }
  fieldChange(e){
    const { localProfile } = this.state;
    const updatedProfile = {...localProfile, [e.target.name]: e.target.value};
    this.setState({localProfile: updatedProfile});
  }
  saveData(localProfile){
    if(this.props.newUser){
      this.props.onAddUser(localProfile)
    }else{
      this.props.onUpdateUser(localProfile)
    }
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
    newUser: state.user.newUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddUser: user => {
      dispatch(addUser(user))
    },
    onUpdateUser: user => {
      dispatch(updateUser(user))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
