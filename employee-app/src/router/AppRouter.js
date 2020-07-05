import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeComponent from '../component/employee/EmployeeComponent';
import AddEmployeeComponent from '../component/employee/AddEmployeeComponent';
import EditEmployeeComponent from '../component/employee/EditEmployeeComponent';

const AppRouter = () => {
    return (
        <div className="container">
            <Router>
                <div className="col-md-12">
                    <Switch>
                        <Route path="/" exact component={EmployeeComponent}></Route>
                        <Route path="/employee" exact component={EmployeeComponent} />
                        <Route path="/addEmployee" component={AddEmployeeComponent}></Route>
                        <Route path="/editEmployee/:id" component={EditEmployeeComponent}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default AppRouter;