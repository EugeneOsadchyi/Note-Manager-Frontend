import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Explorer.css';

import DirectoryList from '../../components/DirectoryList';
import * as actions from '../../store/actions/directory';

export const Explorer = (props) => {
  const {
    directories,
    onSelectDirectory,
    onOpenDirectory,
    onCloseDirectory,
  } = props;

  return (
    <div className="Explorer">
      <DirectoryList
        directories={directories}
        selectDirectory={onSelectDirectory}
        openDirectory={onOpenDirectory}
        closeDirectory={onCloseDirectory}
      />
    </div>
  );
};

Explorer.propTypes = {
  directories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.name,
      parentId: PropTypes.number,
      opened: PropTypes.bool,
    }),
  ).isRequired,
  onSelectDirectory: PropTypes.func.isRequired,
  onOpenDirectory: PropTypes.func.isRequired,
  onCloseDirectory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  directories: state.directory.directories,
});

const mapDispatchToProps = dispatch => ({
  onSelectDirectory: id => dispatch(actions.selectDirectory(id)),
  onOpenDirectory: id => dispatch(actions.openDirectory(id)),
  onCloseDirectory: id => dispatch(actions.closeDirectory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
