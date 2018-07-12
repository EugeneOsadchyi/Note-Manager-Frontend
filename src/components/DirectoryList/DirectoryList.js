import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './DirectoryList.css';

import Directory from './Directory';

class DirectoryList extends PureComponent {
  renderDirectories() {
    const {
      directories,
      parentId,
      selectDirectory,
      openDirectory,
      closeDirectory,
    } = this.props;

    return (
      directories.map((directory) => {
        const {
          id, name, opened, active,
        } = directory;

        if (directory.parentId === parentId) {
          const folderClicked = directory.opened
            ? closeDirectory
            : openDirectory;

          return (
            <li key={id}>
              <Directory
                name={name}
                opened={opened}
                active={active}
                clicked={() => selectDirectory(id)}
                folderClicked={() => folderClicked(id)}
              />
              {this.renderNestedDirectories(directory)}
            </li>
          );
        }
        return null;
      })
    );
  }

  renderNestedDirectories(directory) {
    const {
      directories, selectDirectory, openDirectory, closeDirectory,
    } = this.props;

    return directory.opened ? (
      <DirectoryList
        directories={directories}
        selectDirectory={selectDirectory}
        openDirectory={openDirectory}
        closeDirectory={closeDirectory}
        parentId={directory.id}
      />
    ) : null;
  }

  render() {
    return (
      <ul className="DirectoryList">
        {this.renderDirectories()}
      </ul>
    );
  }
}

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
};

DirectoryList.defaultProps = {
  directories: [],
  parentId: undefined,
};

export default DirectoryList;
