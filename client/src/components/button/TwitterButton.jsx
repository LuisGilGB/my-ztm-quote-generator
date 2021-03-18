/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';
import Button from './Button';
import './TwitterButton.css';

const DEFAULT_CLASS_NAME = 'twitter-button';

const TwitterButton = ({ className, ...otherProps }) => (
  <Button
    {...otherProps}
    className={classNames(DEFAULT_CLASS_NAME, className)}
    faIcon={faTwitter}
  />
);

TwitterButton.propTypes = {};

export default TwitterButton;
