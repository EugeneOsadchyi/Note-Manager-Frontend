import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ placeholder }) => (
  <input className="Input" type="text" placeholder={placeholder} />
);

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
