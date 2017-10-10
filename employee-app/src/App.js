import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { postsFetchData } from './actions'
import './App.css';
import EmpRow from './empRow';
import TempRow from './tempRow';
import TempRowHeader from './tempRowHeader';

class App extends Component {
  componentDidMount(){
    this.props.postsFetchData();
  }
  render() {
    const { empData, apiData, loader } = this.props;

    const empRows = empData.map((item) => {
      return <EmpRow key={item.id} empInfo={item} />
    });
    
    const tempRows = apiData.map((item) => {
      return <TempRow key={item.dt} tempData={item} />
    });
    
    const addButton = <Link to="/add" className="btn btn-primary">Add Employee</Link>;
    return (
      <div>
        {loader ? 
          <div><img src="22.gif"/></div> : 
          <div>
            <div>
              {addButton}
              {empRows}
            </div>
            <div style={{marginTop: 30}}>
              <h3>Temperature Data from Api</h3>
              <TempRowHeader/>
              {tempRows}
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    empData: state.user.empData,
    apiData: state.user.apiData,
    loader: state.user.loader
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postsFetchData: () => {
      dispatch(postsFetchData())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
