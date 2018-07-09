import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../utils/updateObject';
import arrayToDictionary from '../../utils/arrayToDictionary';

const initialState = {
  directories: [],
};

const updateDirectories = (directories, action, updatedProperties) => (
  directories.map((directory) => {
    if (directory.id !== action.id) {
      return directory;
    }
    return updateObject(directory, updatedProperties);
  })
);

// <<<<<<<< Investigate for validity
const openParentDirectory = (directoriesDictionary, parentId) => {
  const directory = directoriesDictionary[parentId];
  directory.opened = true;

  if (directory.parentId) {
    return {
      ...directoriesDictionary,
      [directory.parentId]: openParentDirectory(directoriesDictionary, directory.parentId),
    };
  }

  return directory;
};

const openDirectories = (directories, directoryId) => {
  const directoryIdToDirectory = arrayToDictionary(directories, 'id');
  const currentDirectory = directoryIdToDirectory[directoryId];

  if (currentDirectory.parentId) {
    return Object.values(openParentDirectory(directoryIdToDirectory, currentDirectory.parentId));
  }
  return directories;
};
// >>>>>>>>>>

const openDirectory = (state, action) => {
  const directories = updateDirectories(state.directories, action, { opened: true });
  return updateObject(state, { directories });
};

const closeDirectory = (state, action) => {
  const directories = updateDirectories(state.directories, action, { opened: false });
  return updateObject(state, { directories });
};

const selectDirectory = (state, action) => {
  let directories = state.directories.map(directory => updateObject(directory, { active: false }));
  directories = updateDirectories(directories, action, { active: true });
  directories = openDirectories(directories, action.id);

  return updateObject(state, { directories });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_DIRECTORY: return openDirectory(state, action);
    case actionTypes.CLOSE_DIRECTORY: return closeDirectory(state, action);
    case actionTypes.SELECT_DIRECTORY: return selectDirectory(state, action);
    default: return state;
  }
};
