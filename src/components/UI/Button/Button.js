import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

const Button = ({
  children, btnType, disabled, clicked,
}) => {
  const classes = classNames('Button', btnType);

  return (
    <button
      type="button"
      disabled={disabled}
      className={classes}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  btnType: PropTypes.string,
  clicked: PropTypes.func.isRequired,
};

Button.defaultProps = {
  disabled: false,
  btnType: null,
};

export default Button;
