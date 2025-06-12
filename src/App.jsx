import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getEmployeesList } from './redux/employees.actions';
import Navigation from './components/Navigation/index';
import EmployeePage from './components/EmployeePage/index';
import EmployeesList from './components/EmployeesList/index';

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
