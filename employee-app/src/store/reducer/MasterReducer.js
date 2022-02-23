import { combineReducers } from 'redux'
import counterReducer from './CounterReducer';
import CsrReducer from './CsrReducer';
import employeeReducer from './EmployeeReducer';

const allReducers = combineReducers({
    employeeReducer: employeeReducer,
    isCsr: CsrReducer,
    counterReducer: counterReducer
});
export default allReducers;