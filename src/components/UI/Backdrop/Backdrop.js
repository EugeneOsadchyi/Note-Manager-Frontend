import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.css';

const Backdrop = ({ show, clicked }) => (
  show ? <div className="Backdrop" role="presentation" onClick={clicked} /> : null
);

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Backdrop;
