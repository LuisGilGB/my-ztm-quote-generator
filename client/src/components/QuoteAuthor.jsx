/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const QuoteAuthor = ({ author }) => {
  return <div data-cy="quote-author">{author}</div>;
};

QuoteAuthor.propTypes = {};

export default QuoteAuthor;
