import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Modal from '../Modal/Modal';
import './navigation.scss';

const Navigation = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilter = position => {
    const currentSort = searchParams.get('sortBy');

    if (position === 'all') {
      searchParams.delete('position');
    } else {
      searchParams.set('position', position);
    }
    searchParams.set('sortBy', currentSort);

    if (currentSort === 'birthDate') {
      searchParams.set('sortBy', 'birthDate');
    } else {
      searchParams.delete('sortBy');
    }

    setSearchParams(searchParams);
  };

  const handleInputChange = event => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onSearch(newValue);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="navigation">
      <span className="navigation__title">Поиск</span>
      <div className="navigation__search">
        <div className="navigation__search_input-conteiner">
          <i className="fa-solid fa-magnifying-glass " />
          <input
            type="text"
            placeholder="Search by name, tag or email"
            className="navigation__search_input"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>

        <button className="navigation__search_btn" onClick={() => setIsModalOpen(true)}>
          <i className="fa-solid fa-signal" />
        </button>
        {isModalOpen && <Modal onClose={handleModalClose} />}
      </div>

      <div className="navigation__conteiner">
        <button className="navigation__conteiner_btn" onClick={() => handleFilter('all')}>
          Все
        </button>

        <button className="navigation__conteiner_btn" onClick={() => handleFilter('designer')}>
          Designers
        </button>
        <button className="navigation__conteiner_btn" onClick={() => handleFilter('analyst')}>
          Analysts
        </button>
        <button className="navigation__conteiner_btn" onClick={() => handleFilter('manager')}>
          Managers
        </button>
        <button className="navigation__conteiner_btn" onClick={() => handleFilter('ios')}>
          IOS
        </button>
        <button className="navigation__conteiner_btn" onClick={() => handleFilter('android')}>
          Android
        </button>
      </div>
    </div>
  );
};

export default Navigation;
