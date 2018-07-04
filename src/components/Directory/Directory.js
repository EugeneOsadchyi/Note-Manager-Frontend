import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';


const Directoty = ({ name, opened }) => {
  const icon = opened ? faFolderOpen : faFolder;

  return (
    <div>
      <span className="icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="name">
        {name}
      </span>
    </div>
  );
};

Directoty.propTypes = {
  name: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
};

export default Directoty;
