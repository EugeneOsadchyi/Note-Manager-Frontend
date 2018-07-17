import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Input.css';

const Input = (props) => {
  let inputElement = null;

  const {
    invalid, shouldValidate, touched, changed,
    value, elementConfig, elementType,
  } = props;

  const inputValueIsInvalid = invalid && shouldValidate && touched;

  const inputClasses = classNames('InputElement', {
    Invalid: inputValueIsInvalid,
  });

  switch (elementType) {
    case ('input'):
      inputElement = (
        <input
          className={inputClasses}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses}
          {...elementConfig}
          value={value}
        />
      );
  }

  return (
    <div className="Input">
      {inputElement}
    </div>
  );
};

Input.propTypes = {
  elementType: PropTypes.string,
  elementConfig: PropTypes.shape({
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  invalid: PropTypes.bool,
  shouldValidate: PropTypes.shape({
    required: PropTypes.bool,
  }),
  touched: PropTypes.bool,
  value: PropTypes.string,
  changed: PropTypes.func,
};

Input.defaultProps = {
  elementType: 'input',
  elementConfig: {},
  invalid: false,
  shouldValidate: {},
  touched: false,
  value: '',
  changed: () => {},
};

export default Input;
