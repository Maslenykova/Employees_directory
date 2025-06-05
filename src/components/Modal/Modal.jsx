import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './modal.scss';

const Modal = ({ onClose }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get('sortBy');

  const handleChange = event => {
    const value = event.target.value;

    if (value === 'alphabet') {
      searchParams.delete('sortBy');
    } else {
      searchParams.set('sortBy', value);
    }

    setSearchParams(searchParams);
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
            checked={!currentSort || currentSort === 'alphabet'}
            onChange={handleChange}
          />
          По алфавиту
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            value="birthDate"
            checked={currentSort === 'birthDate'}
            onChange={handleChange}
          />
          По дню рождения
        </label>
      </div>
    </div>
  );
};

export default Modal;
