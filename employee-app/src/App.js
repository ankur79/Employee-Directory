import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { toggleView, editUser } from './actions'
import './App.css';
import EmpRow from './empRow';
import Profile from './Profile';

class App extends Component {

  render() {
    const { empData, editView, ontoggleView, oneditUser } = this.props;
    const empRows = empData.map((item) => {
      return <EmpRow key={item.id} empInfo={item} toggleView={(emp)=>oneditUser(emp)}/>
    });
    const addButton = <button onClick={()=>ontoggleView()}>Add Employee</button>;
    const currentView = editView ? <Profile saveUpdate={(emp) => this.saveUpdate(emp)}/> : empRows;
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          </Modal.Body>
        </Modal>
        {addButton}
        {currentView}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    empData: state.user.empData,
    editView: state.user.editView,
    showModal: state.user.showModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ontoggleView: () => {
      dispatch(toggleView())
    },
    oneditUser: emp => {
      dispatch(editUser(emp))
    }    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
