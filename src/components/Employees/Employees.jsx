import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './employees.scss';
import { Link } from 'react-router-dom';
import NothingFound from '../NothingFound/NothingFound';

const EmployeesList = ({ employees, searchQuery, sortType }) => {
  const [searchParams] = useSearchParams();

  const positionFilter = searchParams.get('position');

  const positionFilteredEmployees = positionFilter
    ? employees.filter(emp => emp.position.toLowerCase() === positionFilter.toLowerCase())
    : employees;

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const searchFilteredEmployees = normalizedQuery
    ? positionFilteredEmployees.filter(
        emp =>
          emp.name.toLowerCase().includes(normalizedQuery) ||
          emp.tag.toLowerCase().includes(normalizedQuery) ||
          emp.email.toLowerCase().includes(normalizedQuery),
      )
    : positionFilteredEmployees;

  if (searchFilteredEmployees.length === 0) {
    return <NothingFound />;
  }
  const sortedEmployees = [...searchFilteredEmployees].sort((a, b) => {
    if (sortType === 'alphabet') {
      return a.name.localeCompare(b.name);
    }
    if (sortType === 'birthdate') {
      return new Date(a.birthDate) - new Date(b.birthDate);
    }
    return 0;
  });

  return (
    <div className="content">
      {sortedEmployees.map(employee => (
        <li className="employees" key={employee.id}>
          <img className="employees__avatar" src={employee.avatar} alt={employee.name} />
          <div className="employees__info">
            <div className="employees__info_name">{employee.name}</div>
            <div className="employees__info_position">{employee.position}</div>
          </div>
          <Link to={`/employee/${employee.id}`} className="employees__tag">
            {employee.tag}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default EmployeesList;
