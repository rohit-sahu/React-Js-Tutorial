import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import EmployeeService from '../../service/EmployeeService';

class EditEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {},
            message: null,
        };
    }

    render() {
        return (
            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <h3 className="panel-title">
                                EDIT EMPLOYEE
                            </h3>
                            <h4><Link to="/employee"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> EMPLOYEE LIST</Link></h4>
                        </div>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="isbn">First Name:</label>
                                <input type="text" className="form-control" name="firstName" value={this.state.employee.firstName} onChange={this.onChange} placeholder="firstName" />
                            </div>
                            <div className="form-group">
                                <label for="title">Last Name:</label>
                                <input type="text" className="form-control" name="lastName" value={this.state.employee.lastName} onChange={this.onChange} placeholder="lastName" />
                            </div>
                            <div className="form-group">
                                <label for="publisher">Email:</label>
                                <input type="email" className="form-control" name="email" value={this.state.employee.email} onChange={this.onChange} placeholder="Email Address" />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <button type="submit" className="btn btn-default">Submit</button>
                                </div>
                                <div className="col-lg-6">
                                    <h4><Link to="/employee"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Cancel</Link></h4>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        EmployeeService.findEmployeeById(this.props.match.params.id).then((result) => {
            console.log('object :>> ', result.data);
            this.setState({employee: result.data});
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    }

    onChange = (e) => {
        const state = this.state.employee;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        EmployeeService.addEmployee(this.state.employee).then((result) => {
            console.log('result :>> ', result.data);
            this.props.history.push('/employee');
        }).catch((err) => {
            console.log('err :>> ', err);
            alert(err);
        });
    }
}

export default EditEmployeeComponent;