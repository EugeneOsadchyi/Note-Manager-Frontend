import React from 'react';
import PropTypes from 'prop-types';

const Directoty = ({ name }) => (
  <div>
    <span className="name">
      {name}
    </span>
  </div>
);

Directoty.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Directoty;
