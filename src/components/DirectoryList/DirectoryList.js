import React from 'react';
import PropTypes from 'prop-types';
import Directory from './Directory';

const DirectoryList = ({
  directories,
  parentId,
  selectDirectory,
  openDirectory,
  closeDirectory,
  // editDirectory,
}) => (
  <ul>
    {
      directories.map((directory) => {
        if (directory.parentId === parentId) {
          const {
            id, name, opened, active,
          } = directory;
          const folderClicked = opened
            ? closeDirectory
            : openDirectory;

          return (
            <li key={id}>
              <Directory
                name={name}
                opened={opened}
                active={active}
                clicked={() => selectDirectory(id)}
                // doubleClicked={editDirectory}
                folderClicked={() => folderClicked(id)}
              />
              {
                directory.opened ? (
                  <DirectoryList
                    directories={directories}
                    selectDirectory={selectDirectory}
                    openDirectory={openDirectory}
                    closeDirectory={closeDirectory}
                    // editDirectory={editDirectory}
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
  openDirectory: PropTypes.func.isRequired,
  closeDirectory: PropTypes.func.isRequired,
  // toggleDirectory: PropTypes.func.isRequired,
  // editDirectory: PropTypes.func.isRequired,
};

DirectoryList.defaultProps = {
  directories: [],
  parentId: undefined,
};

export default DirectoryList;
