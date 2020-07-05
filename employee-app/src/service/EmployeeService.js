import axios from 'axios';

const EMPLOYEE = 'employees'
const BASE_API_URL = 'http://localhost:8080'
const EMPLOYEE_API_URL = `${BASE_API_URL}/${EMPLOYEE}`

class EmployeeService {
    /*findAllEmployee() {
        return fetch(STUDENT_API_URL).then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                })
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }*/

    findEmployee() {
        return axios.get(EMPLOYEE_API_URL);
    }

    findEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_URL + '/' + employeeId);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_URL + '/' + employeeId);
    }

    addEmployee(employee) {
        return axios.post("" + EMPLOYEE_API_URL, employee);
    }

    editEmployee(employee) {
        return axios.put(EMPLOYEE_API_URL + '/' + employee.id, employee);
    }
}

export default new EmployeeService();