import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ title }) => (
  <header className="Header">
    {title}
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
