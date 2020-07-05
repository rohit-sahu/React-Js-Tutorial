import React, { Component } from 'react';
import EmployeeTableComponent from './EmployeeTableComponent';

class EmployeeComponent extends Component {
    render() {
        return (
            <div className="row">
                <EmployeeTableComponent></EmployeeTableComponent>
            </div>
        );
    }
}

export default EmployeeComponent;