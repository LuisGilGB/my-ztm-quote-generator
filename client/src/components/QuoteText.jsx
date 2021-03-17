/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const QuoteText = ({ text }) => {
  return <div data-cy="quote-text">{text}</div>;
};

export default QuoteText;
