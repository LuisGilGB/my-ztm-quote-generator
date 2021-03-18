/* eslint-disable react/prop-types */
import React from 'react';
import classnames from 'classnames';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

const DEFAULT_CLASS_NAME = 'button';

// eslint-disable-next-line arrow-body-style
const Button = ({ children, className, faIcon }) => {
  return (
    <button className={classnames(DEFAULT_CLASS_NAME, className)} type="button">
      {faIcon && <FontAwesomeIcon icon={faIcon} />}
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
