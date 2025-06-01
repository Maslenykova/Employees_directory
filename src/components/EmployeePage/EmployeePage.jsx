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

  if (!employee)
    return (
      <div className="employee-loading">
        <Spinner />
      </div>
    );

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dob = new Date(employee.birthDate);
  const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());

  let age = today.getFullYear() - dob.getFullYear();

  if (today < dobnow) {
    age = age - 1;
  }

  return (
    <div className="employee-card">
      <div className="employee-card__content">
        <img className="employee-card__avatar" src={employee.avatar} alt={employee.name} />
        <h2 className="employee-card__name">{employee.name}</h2>
        <h3 className="employee-card__position">{employee.position}</h3>
      </div>

      <div className="employee-card__info">
        <div className="employee-card__info_birth info">
          <div className="birth-date">
            <i class="fa-regular fa-star" />
            {new Date(employee.birthDate).toLocaleDateString('ru-RU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}{' '}
          </div>
          <div className="employee-card__info_age info">{age} лет</div>
        </div>

        <div className="employee-card__info_phone info">
          <i class="fa-solid fa-phone" /> {employee.phone}
        </div>

        <div className="employee-card__info_email info">
          <i class="fa-solid fa-envelope" /> {employee.email}
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
