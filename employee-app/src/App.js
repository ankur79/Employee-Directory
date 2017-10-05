import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './App.css';
import EmpRow from './empRow';

class App extends Component {

  render() {
    const { empData } = this.props;
    const empRows = empData.map((item) => {
      return <EmpRow key={item.id} empInfo={item} />
    });
    const addButton = <Link to="/add" className="btn btn-primary">Add Employee</Link>;
    return (
      <div>
        {addButton}
        {empRows}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    empData: state.user.empData
  }
}

const mapDispatchToProps = dispatch => {
  return {
  
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
