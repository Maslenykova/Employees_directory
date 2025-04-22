import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEmployeesList } from '../gateway/employeesGateway';
import './employeePage.scss';
import Spinner from '../Spinner/Spinner';

const EmployeePage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetchEmployeesList().then(data => {
      const found = data.find(emp => emp.id === id);
      setEmployee(found);
    });
  }, [id]);

  // useEffect(() => {
  //   fetchEmployeesList().then(data => {
  //     setTimeout(() => {
  //       const found = data.find(emp => String(emp.id) === String(id));
  //       setEmployee(found);
  //     }, 1000);
  //   });
  // }, [id]);

  if (!employee)
    return (
      <div className="employee-loading">
        <Spinner />
      </div>
    );

  return (
    <div className="employee-card">
      <div className="employee-card__content">
        <img className="employee-card__avatar" src={employee.avatar} alt={employee.name} />
        <h2>{employee.name}</h2>
        <p>{employee.position}</p>
      </div>

      <div className="employee-card__info">
        <i class="fa-solid fa-phone"></i>
        <p>{employee.phone}</p>
      </div>
      <div className="employee-card__info">
        <i class="fa-regular fa-star"></i>
        <p>
          {new Date(employee.birthDate).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>
    </div>
  );
};

export default EmployeePage;
