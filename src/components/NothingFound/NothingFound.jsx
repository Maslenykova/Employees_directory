import React from 'react';
import './nothingFound.scss';

const NothingFound = () => (
  <div className="searchError">
    <img
      src="https://lucky-custard-f827a4.netlify.app/images/magnifying-glass.svg"
      alt="magnifyng_glass"
    />

    <div className="searchError__title">Мы ничего не нашли</div>
    <div className="searchError__text">Попробуй скорректировать запрос</div>
  </div>
);

export default NothingFound;
