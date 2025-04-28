import React from 'react';
import './nothingFound.scss';

const NothingFound = () => {
  return (
    <div className="searchError">
      <i className="fa-solid fa-magnifying-glass earchError__picture" />

      <div className="searchError__title">We didn't find anyone</div>
      <div className="searchError__text">Try againe</div>
    </div>
  );
};

export default NothingFound;
