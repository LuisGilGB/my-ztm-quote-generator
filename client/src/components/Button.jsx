/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const Button = ({ text }) => {
  return <button type="button">{text}</button>;
};

Button.propTypes = {};

export default Button;
