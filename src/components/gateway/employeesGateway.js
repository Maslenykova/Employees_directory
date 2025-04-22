const baseUrl = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';

export const fetchEmployeesList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Error loading data');
    })
    .then(employeesList => {
      return employeesList;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
