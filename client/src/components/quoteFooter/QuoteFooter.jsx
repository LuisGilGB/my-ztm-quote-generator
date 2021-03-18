/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import Button from '../button/Button';
import TwitterButton from '../button/TwitterButton';
import './QuoteFooter.css';

// eslint-disable-next-line arrow-body-style
const QuoteFooter = (props) => {
  return (
    <div {...props} className="quote-footer" data-cy="quote-footer">
      <TwitterButton />
      <Button>New quote</Button>
    </div>
  );
};

QuoteFooter.propTypes = {};

export default QuoteFooter;
