import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';


const Directory = ({
  name,
  opened,
  folderClicked,
  doubleClicked,
}) => {
  const icon = opened ? faFolderOpen : faFolder;

  return (
    <div className="Directory" onDoubleClick={doubleClicked}>
      <span className="icon" onClick={folderClicked}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="name">
        {name}
      </span>
    </div>
  );
};

Directory.propTypes = {
  name: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  doubleClicked: PropTypes.func.isRequired,
  folderClicked: PropTypes.func.isRequired,
};

export default Directory;
