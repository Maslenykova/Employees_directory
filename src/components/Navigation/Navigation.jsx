import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Modal from '../Modal/Modal';
import './navigation.scss';

const Navigation = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const searchTextFromParams = searchParams.get('searchText') || '';
    setInputValue(searchTextFromParams);
  }, [searchParams]);

  const handleInputChange = value => {
    const params = new URLSearchParams(searchParams);
    value ? params.set('searchText', value) : params.delete('searchText');
    setSearchParams(params);
  };

  const handleFilter = position => {
    if (position === 'all') {
      searchParams.delete('position');
    } else {
      searchParams.set('position', position);
    }

    setSearchParams(searchParams);
  };

  const tabsConfig = [
    { label: 'Все', value: 'all' },
    { label: 'Designers', value: 'designer' },
    { label: 'Analysts', value: 'analyst' },
    { label: 'Managers', value: 'manager' },
    { label: 'IOS', value: 'ios' },
    { label: 'Android', value: 'android' },
  ];

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
            onChange={e => {
              const value = e.target.value;
              setInputValue(value);
              handleInputChange(value);
              onSearch(value);
            }}
          />
        </div>

        <button className="navigation__search_btn" onClick={() => setIsModalOpen(true)}>
          <i className="fa-solid fa-signal" />
        </button>
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      </div>

      <div className="navigation__conteiner">
        {tabsConfig.map(({ label, value }) => (
          <button
            key={value}
            className="navigation__conteiner_btn"
            onClick={() => handleFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
