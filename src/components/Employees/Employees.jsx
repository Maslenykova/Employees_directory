import React, { useState } from 'react';
import './employees.scss';
import { Link } from 'react-router-dom';

const EmployeesList = ({ employees }) => {
  const [isHeadOpen, setIsHeadOpen] = useState(true);
  const openEmployees = () => setIsHeadOpen(false);

  return (
    <div className="content">
      {employees.map(employee => (
        <div className="employees" key={employee.id}>
          <img className="employees__avatar" src={employee.avatar} alt={employee.name} />
          <div className="employees__info">
            <div className="employees__info_name">{employee.name}</div>
            <div className="employees__info_position">{employee.position}</div>
          </div>
          <Link to={`/employee/${employee.id}`} className="employees__tag">
            {employee.tag}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EmployeesList;

// const Employees = ({avatar, name, position, tag, email, birthDate, phone, id}) => {

//   const [isWorkerOpen, setIsWorkerOpen] = useState(false);

//   const openWorkerCard = (e) => {
//     e.preventDefault();
//     setIsWorkerOpen(true);
//   };

//   const closeWorkerCard = () => setIsWorkerOpen(false);

//       return (
//         <div className="employees">
//            <img src={avatar} alt={name} className="employees__avatar" />
//            <div className='employees__info'>
//              <div className='employees__info_name'>{name}</div>
//            <div className='employees__info_position'>{position}</div>

//            </div>
//            <a href="#" className="employees__tag" onClick={openWorkerCard}>
//         {tag}
//       </a>

//       {isWorkerOpen && (
//         <EmployeePage
//           onClose={closeWorkerCard}
//           avatar={avatar}
//           name={name}
//           position={position}
//           email={email}
//           birthDate={birthDate}
//           phone={phone}
//         />
//       )}
//         </div>
//       );
//     }

//   export default Employees;
