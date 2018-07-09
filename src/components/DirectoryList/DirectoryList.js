import React from 'react';
import PropTypes from 'prop-types';
import Directory from './Directory';

const DirectoryList = ({
  directories,
  parentId,
  selectDirectory,
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
                active={directory.active}
                clicked={selectDirectory}
                doubleClicked={editDirectory}
                folderClicked={toggleDirectory}
              />
              {
                directory.opened ? (
                  <DirectoryList
                    directories={directories}
                    selectDirectory={selectDirectory}
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
      active: PropTypes.bool.isRequired,
    }),
  ),
  parentId: PropTypes.number,
  selectDirectory: PropTypes.func.isRequired,
  toggleDirectory: PropTypes.func.isRequired,
  editDirectory: PropTypes.func.isRequired,
};

DirectoryList.defaultProps = {
  directories: [],
  parentId: undefined,
};

export default DirectoryList;
