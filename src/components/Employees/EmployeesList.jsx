import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './employees.scss';
import NothingFound from '../NothingFound/NothingFound';

const EmployeesList = ({ employees, searchQuery }) => {
  const [searchParams] = useSearchParams();

  const positionFilter = searchParams.get('position');
  const sortBy = searchParams.get('sortBy');

  const getSortEmployeesList = (employees, { position, query, sortBy }) => {
    const normalizedQuery = query.trim().toLowerCase();

    return employees
      .filter(emp => {
        const matchesPosition = position
          ? emp.position.toLowerCase() === position.toLowerCase()
          : true;
        const matchesQuery = normalizedQuery
          ? [emp.name, emp.tag, emp.email].some(field =>
              field.toLowerCase().includes(normalizedQuery),
            )
          : true;
        return matchesPosition && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'birthDate') {
          return new Date(a.birthDate) - new Date(b.birthDate);
        }
        return a.name.localeCompare(b.name);
      });
  };

  const visibleEmployees = getSortEmployeesList(employees, {
    position: positionFilter,
    query: searchQuery,
    sortBy,
  });

  const renderEmployee = employee => (
    <Link to={`/employee/${employee.id}`} key={employee.id} className="employees__link">
      <img className="employees__avatar" src={employee.avatar} alt={employee.name} />
      <div className="employees__info">
        <div className="employees__row">
          <div className="employees__info_name">{employee.name}</div>
          <div className="employees__tag">{employee.tag}</div>
        </div>
        <div className="employees__info_position">{employee.position}</div>
      </div>
    </Link>
  );

  if (visibleEmployees.length === 0) return <NothingFound />;

  if (sortBy === 'birthDate') {
    const groupedByYear = visibleEmployees.reduce((acc, employee) => {
      const year = new Date(employee.birthDate).getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(employee);
      return acc;
    }, {});

    const sortedYears = Object.keys(groupedByYear).sort((a, b) => a - b);

    return (
      <div className="content">
        <ul className="employees-list">
          {sortedYears.map(year => (
            <li className="employees-list_items" key={year}>
              <h2 className="employees-list_year">{year}</h2>
              {groupedByYear[year].map(employee => renderEmployee(employee))}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="content">
      <ul className="employees-list">
        {visibleEmployees.map(employee => (
          <li className="employees-list_items" key={employee.id}>
            {renderEmployee(employee)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeesList;
