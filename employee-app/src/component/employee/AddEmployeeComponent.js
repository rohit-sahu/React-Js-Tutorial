import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../../service/EmployeeService';

class AddEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            firstName: '',
            lastName: '',
            email: ''
        };
    }

    render() {
        const { firstName, lastName, email } = this.state;
        return (
            <div className="row">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div className="row">
                            <h3 class="panel-title">
                                ADD EMPLOYEE
                            </h3>
                            <h4><Link to="employee"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> EMPLOYEE LIST</Link></h4>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="isbn">First Name:</label>
                                <input type="text" class="form-control" name="firstName" value={firstName} onChange={this.onChange} placeholder="firstName" />
                            </div>
                            <div class="form-group">
                                <label for="title">Last Name:</label>
                                <input type="text" class="form-control" name="lastName" value={lastName} onChange={this.onChange} placeholder="lastName" />
                            </div>
                            <div class="form-group">
                                <label for="publisher">Email:</label>
                                <input type="email" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email Address" />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <button type="submit" class="btn btn-default">Submit</button>
                                </div>
                                <div className="col-lg-6">
                                    <h4><Link to="employee"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Cancel</Link></h4>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email } = this.state;
        EmployeeService.addEmployee(this.state).then((result) => {
            console.log('result :>> ', result.data);
            this.props.history.push('/employee');
        }).catch((err) => {
            console.log('err :>> ', err);
            alert(err)
        });
    }
}

export default AddEmployeeComponent;