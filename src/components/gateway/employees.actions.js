import { fetchEmployeesList } from './employeesGateway';

export const EMPLOYEES_LIST_RECEIVED = 'EMPLOYEES_LIST_RECEIVED';

export const employeesListReceived = employeesList => {
  const action = {
    type: EMPLOYEES_LIST_RECEIVED,
    payload: employeesList,
  };
  return action;
};

export const getEmployeesList = () => {
  return dispatch => {
    fetchEmployeesList()
      .then(data => {
        dispatch(employeesListReceived(data));
      })
      .catch(error => {
        console.error('Ошибка при получении сотрудников:', error);
      });
  };
};

export const getEmployeeById = id => {
  return fetch(`https://66a0f8b17053166bcabd894e.mockapi.io/api/workers/${id}`).then(response => {
    if (!response.ok) {
      throw new Error('Ошибка при получении сотрудника');
    }
    return response.json();
  });
};
