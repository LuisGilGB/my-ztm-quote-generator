/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import QuoteText from '../quoteText/QuoteText';
import QuoteAuthor from '../quoteAuthor/QuoteAuthor';
import QuoteFooter from '../quoteFooter/QuoteFooter';
import './QuoteCard.css';

// eslint-disable-next-line arrow-body-style
const QuoteCard = ({ text, author }) => {
  return (
    <div className="quote-card" data-cy="quote-card">
      <QuoteText text={text} />
      <QuoteAuthor author={author} />
      <QuoteFooter />
    </div>
  );
};

QuoteCard.propTypes = {};

export default QuoteCard;
