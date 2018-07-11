import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';


const Directory = ({
  name,
  opened,
  active,
  clicked,
  doubleClicked,
  folderClicked,
}) => {
  const icon = opened ? faFolderOpen : faFolder;
  const classes = classNames('Directory', {
    active,
  });

  return (
    <div
      className={classes}
      onClick={clicked}
      onDoubleClick={doubleClicked}
    >
      <span className="icon" role="button" onClick={folderClicked}>
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
  active: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
  doubleClicked: PropTypes.func.isRequired,
  folderClicked: PropTypes.func.isRequired,
};

export default Directory;
