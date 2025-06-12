import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Spinner = () => {
  return <span className="spinner" />;
};

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.defaultProps = {
  size: 16,
};

export default Spinner;
