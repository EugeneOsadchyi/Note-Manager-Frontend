import React from 'react';
import PropTypes from 'prop-types';
import Directory from './Directory';

const DirectoryList = ({
  directories,
  parentId,
  toggleDirectory,
  editDirectory,
}) => (
  <ul>
    {
      directories.map((directory) => {
        if (directory.parentId === parentId) {
          return (
            <li key={directory.id}>
              <Directory
                name={directory.name}
                opened={directory.opened}
                folderClicked={toggleDirectory}
                doubleClicked={editDirectory}
              />
              {
                directory.opened ? (
                  <DirectoryList
                    directories={directories}
                    toggleDirectory={toggleDirectory}
                    editDirectory={editDirectory}
                    parentId={directory.id}
                  />
                ) : null
              }
            </li>
          );
        }
        return null;
      })
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
  parentId: PropTypes.number,
  toggleDirectory: PropTypes.func.isRequired,
  editDirectory: PropTypes.func.isRequired,
};

DirectoryList.defaultProps = {
  directories: [],
  parentId: undefined,
};

export default DirectoryList;
