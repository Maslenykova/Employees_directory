import { EMPLOYEES_LIST_RECEIVED } from './employees.actions';

const initialState = {
  employeesList: [],
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LIST_RECEIVED:
      return {
        ...state,
        employeesList: action.payload,
      };
    default:
      return state;
  }
};

export default employeesReducer;
