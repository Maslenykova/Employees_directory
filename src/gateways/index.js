export const getEmployeeById = id => {
  return fetch(`https://66a0f8b17053166bcabd894e.mockapi.io/api/workers/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка при получении сотрудника');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Ошибка при получении сотрудника:', error.message);
      throw error;
    });
};
