import React, { Component } from 'react';
import EmployeeService from '../../service/EmployeeService';
import { Link } from 'react-router-dom';

class EmployeeTableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            message: "Data is about to fetch..."
        };
        this.refreshEmployee = this.refreshEmployee.bind(this);
        //this.shoot = this.shoot.bind(this, "Hello");
    }

    render() {
        return (
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="panel-title">All Employees</h3>
                            </div>
                            <div className="col-lg-6">
                                <h4><Link to="addEmployee"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Employee</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <table className="table" onClick={this.shoot.bind(this, "Hello")}>
                    {/* <table className="table" onClick={this.shoot}> */}
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(employee => 
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <Link to={'editEmployee/' + employee.id} className="btn btn-warning">Edit</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning" onClick={(env) => this.deleteEmployee(employee.id, env)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.refreshEmployee();
    }

    // shoot() {
    //     alert(this.state.message);
    // }

    // shoot = () => {
    //     alert(this.state.message);
    // }

    /**
     * This is the test method for the learning purpose.
     * 
     * @param {*} a is the parameter which is passed during call by the developer.
     * @param {*} event is optional, if you need event object then add event in method parameters.
     */
    shoot(a, event) {
        alert(event.type + " - " + a);
    }

    refreshEmployee() {
        alert(this.state.message)
        EmployeeService.findEmployee().then((result) => {
            console.log('object :>> ', result);
            this.setState({employees: result.data, message: "Data is fetched from server."});
        }).catch((err) => {
            console.log('object :>> ', err);
        });
    }

    deleteEmployee(id, event) {
        EmployeeService.deleteEmployee(id).then((result) => {
            this.setState({message: `Delete of course ${id} Successful`});
            alert(event.type + " - " + this.state.message)
            this.refreshEmployee();
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    }
}

export default EmployeeTableComponent;