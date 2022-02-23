import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllEmployee } from '../employee/EmployeeActions';
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
        this.shootConstructorBind = this.shootConstructorBind.bind(this, "Bind your functions in the class constructor. Considered by many as a best-practice approach that avoids touching JSX at all and doesn't create a new function on each component re-render.");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Component is called getDerivedStateFromProps and props is " + JSON.stringify(props) + " state is " + JSON.stringify(state) );
        return state;
    }

    render() {
        console.log("Component is rendering......... and props is - " + JSON.stringify(this.props));
        console.log(this.props);
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
                <div className="panel-body" onClick={this.shootConstructorBind}>
                    <table className="table" onClick={this.shoot.bind(this, "Bind your functions inline. You can still find this approach used here and there in some tutorials / articles / etc, so it's important you're aware of it. It it the same concept like #1, but be aware that binding a function creates a new function per each re-render.")}>
                    {/* <table className="table" onClick={this.shoot}> */}
                        <thead>
                            <tr>
                                <th onClick={(env) => this.shootArrow("Arrow with passing parameter and accessing with event object using inline event passing", env)}>Id</th>
                                <th onClick={this.shootArrow.bind(this, "Arrow with passing parameter and accessing the event object using bind")}>First Name</th>
                                <th onClick={(env) => this.shoot("Use a fat arrow function. Until arrow functions, every new function defined its own this value. However, the arrow function does not create its own this context, so this has the original meaning from the React component instance.", env)}>Last Name</th>
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
        console.log("Component is called componentDidMounting.........");
        this.refreshEmployee();
    }

    shouldComponentUpdate() {
        console.log("Component shouldComponentUpdate.........");
        return true;
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
     shootArrow = (a, event) => {
       alert(event.type + " - " + a);
       /*
       'event' represents the React event that triggered the function,
        in this case the 'click' event
       */
     }

     /**
     * This is the test method for the learning purpose.
     * 
     * @param {*} a is the parameter which is passed during call by the developer.
     * @param {*} event is optional, if you need event object then add event in method parameters.
     */
    shootConstructorBind(a, event) {
        alert(event.type + " - " + a);
    }

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
        //alert(this.state.message)
        EmployeeService.findEmployee().then((result) => {
            console.log('refreshEmployee object :>> ', result);
            this.props.getAllEmployee(result.data);
            this.props.getAllEmployees(result.data);
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

const mapStateToProps = (state, ownProps) => {
    const { dataFetch, totalFetch } = ownProps;
    console.log("mapStateToProps is called and state is - " + JSON.stringify(state));
    console.log("mapStateToProps is called and ownProps is - " + JSON.stringify(ownProps) + " Fetch data from - " + dataFetch + " and Total Fetch is " + totalFetch);
    return {
        employees: state.employees,
    };
};

// const mapStateToProps = state => {
//     console.log("mapStateToProps is called - " + JSON.stringify(state));
//     return {
//         employees: state.employees,
//     }
// };

// const mapStateToProps = state => ({
//     employees: state.employees,
// });

const mapDispatchToProps = (dispatch, ownProps) => {
    const { dataFetch, totalFetch } = ownProps;
    console.log("mapDispatchToProps is called and dispatch is - " + JSON.stringify(dispatch));
    console.log("mapDispatchToProps is called and ownProps is - " + JSON.stringify(ownProps) + " Fetch data from - " + dataFetch + " and Total Fetch is " + totalFetch);
    return {
        // dispatching plain actions
        addEmployee: () => dispatch({ type: 'ADD_EMPLOYEE', payload: {} }),
        editEmployee: () => dispatch({ type: 'EDIT_EMPLOYEE', payload: {} }),
        getAllEmployees: (employees) => { dispatch({ type: 'GET_EMPLOYEES', payload: employees }) }
    }
};

export default connect(mapStateToProps, getAllEmployee, mapDispatchToProps )(EmployeeTableComponent)

//export default EmployeeTableComponent;