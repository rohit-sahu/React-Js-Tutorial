const initialState = [
  {
    "id": 1,
    "createdBy": null,
    "lastModifiedBy": null,
    "version": 0,
    "createdDate": null,
    "lastModifiedDate": null,
    "isDeleted": false,
    "isActive": true,
    "firstName": "Lokesh",
    "lastName": "Gupta",
    "email": "abc@gmail.com",
    "contactNumbers": [],
    "address": []
  },
  {
    "id": 2,
    "createdBy": null,
    "lastModifiedBy": null,
    "version": 0,
    "createdDate": null,
    "lastModifiedDate": null,
    "isDeleted": false,
    "isActive": true,
    "firstName": "Deja",
    "lastName": "Vu",
    "email": "xyz@email.com",
    "contactNumbers": [],
    "address": []
  },
  {
    "id": 3,
    "createdBy": null,
    "lastModifiedBy": null,
    "version": 0,
    "createdDate": null,
    "lastModifiedDate": null,
    "isDeleted": false,
    "isActive": true,
    "firstName": "Caption",
    "lastName": "America",
    "email": "cap@marvel.com",
    "contactNumbers": [],
    "address": []
  },
  {
    "id": 4,
    "createdBy": "Admin",
    "lastModifiedBy": "Admin",
    "version": 0,
    "createdDate": "2021-08-19T18:54:01.676",
    "lastModifiedDate": "2021-08-19T18:54:01.676",
    "isDeleted": false,
    "isActive": true,
    "firstName": "Rohit",
    "lastName": "Raj",
    "email": "r@gmail.com",
    "contactNumbers": [],
    "address": []
  },
  {
    "id": 5,
    "createdBy": "Admin",
    "lastModifiedBy": "Admin",
    "version": 0,
    "createdDate": "2021-08-19T18:54:01.691",
    "lastModifiedDate": "2021-08-19T18:54:01.691",
    "isDeleted": false,
    "isActive": true,
    "firstName": "Mohit",
    "lastName": "Raj",
    "email": "m@gmail.com",
    "contactNumbers": [],
    "address": []
  },
  {
    "id": 6,
    "createdBy": "Admin",
    "lastModifiedBy": "Admin",
    "version": 0,
    "createdDate": "2021-08-19T18:54:01.693",
    "lastModifiedDate": "2021-08-19T18:54:01.693",
    "isDeleted": false,
    "isActive": true,
    "firstName": "Bittu",
    "lastName": "Raj",
    "email": "b@gmail.com",
    "contactNumbers": [],
    "address": []
  },
  {
    "id": 7,
    "createdBy": "Admin",
    "lastModifiedBy": "Admin",
    "version": 0,
    "createdDate": "2021-08-19T18:54:01.695",
    "lastModifiedDate": "2021-08-19T18:54:01.695",
    "isDeleted": false,
    "isActive": true,
    "firstName": "Prem",
    "lastName": "Raj",
    "email": "p@gmail.com",
    "contactNumbers": [],
    "address": []
  },
  {
    "id": 8,
    "createdBy": "Admin",
    "lastModifiedBy": "Admin",
    "version": 0,
    "createdDate": "2021-08-19T18:54:01.697",
    "lastModifiedDate": "2021-08-19T18:54:01.697",
    "isDeleted": false,
    "isActive": true,
    "firstName": "Kishan",
    "lastName": "Raj",
    "email": "k@gmail.com",
    "contactNumbers": [],
    "address": []
  }
]

const employeeReducer = (state = null, action) => {
  console.log("employeeReducer");
  console.log(state);
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        employees: [action.payload, ...state.employees]
      }
    case 'GET_EMPLOYEES':
      console.log('GET_EMPLOYEES action - ' + JSON.stringify(action.payload));
      return action.payload;
    case 'test2':
      console.log('test2 action - ' + action.data);
      break;
    case 'test3':
      console.log('test3 action - ' + action.data);
      break;
    default:
      return state
  }
  return state;
}

export default employeeReducer;