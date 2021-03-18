import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Button from './Button';

// eslint-disable-next-line react/jsx-props-no-spreading
const TwitterButton = (props) => <Button {...props} faIcon={faTwitter} />;

TwitterButton.propTypes = {};

export default TwitterButton;
