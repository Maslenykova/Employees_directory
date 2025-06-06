import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import { getEmployeesList } from './components/gateway/employees.actions';
import Navigation from './components/Navigation/Navigation';
import EmployeePage from './components/EmployeePage/EmployeePage';
import EmployeesList from './components/Employees/EmployeesList';

const App = ({ employeesList, getEmployeesList }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    getEmployeesList();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main">
              <Navigation onSearch={setSearchQuery} onSortTypeChange={setSortType} />

              <EmployeesList
                employees={employeesList}
                searchQuery={searchQuery}
                sortType={sortType}
              />
            </div>
          }
        />
        <Route
          path="/employee/"
          element={<EmployeesList employees={employeesList} searchQuery={searchQuery} />}
        />
        <Route path="/employee/:id" element={<EmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  employeesList: state.employeesList.employeesList,
});

const mapDispatchToProps = {
  getEmployeesList,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
