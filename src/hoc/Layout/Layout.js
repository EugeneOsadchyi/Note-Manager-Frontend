import React from 'react';
import PropTypes from 'prop-types';
import './Layout.css';

import Aux from '../Aux';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <Aux>
    <Header title="Manager" />
    <main className="Content">
      {children}
    </main>
    <Footer />
  </Aux>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
