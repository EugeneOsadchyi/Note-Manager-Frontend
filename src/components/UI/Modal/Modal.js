import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop';

const Modal = ({ children, show, modalClosed }) => (
  <Aux>
    <Backdrop show={show} clicked={modalClosed} />
    <div className="Modal">
      {children}
    </div>
  </Aux>
);

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired,
};

export default Modal;
