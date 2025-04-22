import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getEmployeesList } from './components/gateway/employees.actions';
import Navigation from './components/Navigation/Navigation';
import EmployeePage from './components/EmployeePage/EmployeePage';
import EmployeesList from './components/Employees/Employees';
import NothingFound from './components/NothingFound/NothingFound';

const App = ({ employeesList, getEmployeesList }) => {
  useEffect(() => {
    getEmployeesList();
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<EmployeesList employees={employeesList} />} />
        <Route path="/employee/:id" element={<EmployeePage />} />
        <Route path="*" element={<NothingFound />} />
      </Routes>
    </BrowserRouter>
  );
};

//   return (
//     <div>
//       <Navigation />

//       {employeesList.map(employee => (
//         <Employees
//           key={employee.id}
//           id={employee.id}
//           name={employee.name}
//           tag={employee.tag}
//           avatar={employee.avatar}
//           position={employee.position}
//           phone={employee.phone}
//           email={employee.email}
//           birthDate={employee.birthDate}

//         />
//       ))}
//     </div>
//   );

const mapStateToProps = state => ({
  employeesList: state.employeesList.employeesList,
});

const mapDispatchToProps = {
  getEmployeesList,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
