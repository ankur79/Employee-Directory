import React from 'react';
import PropTypes from 'prop-types';

const tempRow = ({tempData}) => {
    return (<div className="empRow">
                <div>{tempData.dt_txt}</div>
                <div>{tempData.main.temp}</div>
                <div>{tempData.main.temp_max}</div>
                <div>{tempData.main.temp_min}</div>
            </div>)
}

tempRow.propTypes = {
    tempData: PropTypes.object
}

export default tempRow;
