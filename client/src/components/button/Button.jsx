/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// eslint-disable-next-line arrow-body-style
const Button = ({ children, faIcon }) => {
  return (
    <button type="button">
      {faIcon && <FontAwesomeIcon icon={faIcon} />}
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
