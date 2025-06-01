import React, { useState } from 'react';
import './modal.scss';

const Modal = ({ onSelect, onClose }) => {
  const [selectedSort, setSelectedSort] = useState('');

  const handleChange = event => {
    const selectedValue = event.target.value;
    setSelectedSort(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div className="modal-overlay">
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="conteniner">
          <div className="modal__title">Сортировка</div>
          <div className="modal__close" onClick={onClose}>
            +
          </div>
        </div>

        <label>
          <input
            type="radio"
            name="sort"
            value="alphabet"
            checked={selectedSort === 'alphabet'}
            onChange={handleChange}
          />
          По алфавиту
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            value="birthdate"
            checked={selectedSort === 'birthdate'}
            onChange={handleChange}
          />
          По дню рождения
        </label>
      </div>
    </div>
  );
};

export default Modal;
