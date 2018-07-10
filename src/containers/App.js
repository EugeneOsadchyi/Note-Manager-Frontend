import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { openDirectory, closeDirectory, selectDirectory } from '../store/actions/directory';

import DirectoryList from '../components/DirectoryList';

const App = ({
  directory,
  onOpenDirectory,
  onCloseDirectory,
  onSelectDirectory,
}) => (
  <div>
    <h1>
      Note Manager
    </h1>
    <DirectoryList
      directories={directory.directories}
      openDirectory={onOpenDirectory}
      closeDirectory={onCloseDirectory}
      selectDirectory={onSelectDirectory}
    />
  </div>
);

App.propTypes = {
  directory: PropTypes.shape({
    directories: PropTypes.array,
  }).isRequired,
  onOpenDirectory: PropTypes.func.isRequired,
  onCloseDirectory: PropTypes.func.isRequired,
  onSelectDirectory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  directory: state.directory,
});

const mapDispatchToProps = dispatch => ({
  onOpenDirectory: id => dispatch(openDirectory(id)),
  onCloseDirectory: id => dispatch(closeDirectory(id)),
  onSelectDirectory: id => dispatch(selectDirectory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
