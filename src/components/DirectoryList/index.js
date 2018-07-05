import React from 'react';
import PropTypes from 'prop-types';
import Directory from './Directory';

const DirectoryList = ({
  directories,
  toggleDirectory,
  editDirectory,
}) => (
  <ul>
    {
      directories.map(directory => (
        <li key={directory.id}>
          <Directory
            name={directory.name}
            opened={directory.opened}
            folderClicked={toggleDirectory}
            doubleClicked={editDirectory}
          />
        </li>
      ))
    }
  </ul>
);

DirectoryList.propTypes = {
  directories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      opened: PropTypes.bool.isRequired,
    }),
  ),
  toggleDirectory: PropTypes.func.isRequired,
  editDirectory: PropTypes.func.isRequired,
};

DirectoryList.defaultProps = {
  directories: [],
};

export default DirectoryList;
