import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../utils/updateObject';
import Ancestry from '../../utils/ancestry';

const initialState = {
  directories: [
    // {
    //   id: 1, name: 'Directory 1', opened: false, active: true,
    // }, {
    //   id: 2, name: 'Directory 2', opened: false, active: false,
    // }, {
    //   id: 3, name: 'Directory 1.1', opened: false, active: false, parentId: 1,
    // }, {
    //   id: 4, name: 'Directory 1.2', opened: false, active: false, parentId: 1,
    // }, {
    //   id: 5, name: 'Directory 1.1.1', opened: false, active: false, parentId: 3,
    // },
  ],
};

const updateDirectories = (directories, ids, updatedProperties) => (
  directories.map((directory) => {
    if (ids.includes(directory.id)) {
      return updateObject(directory, updatedProperties);
    }
    return directory;
  })
);

const openDirectory = (state, action) => {
  const directories = updateDirectories(state.directories, [action.id], { opened: true });
  return updateObject(state, { directories });
};

const closeDirectory = (state, action) => {
  const directories = updateDirectories(state.directories, [action.id], { opened: false });
  return updateObject(state, { directories });
};

const selectDirectory = (state, action) => {
  let directories = state.directories.map(directory => updateObject(directory, { active: false }));
  directories = updateDirectories(directories, [action.id], { active: true });

  const openedDirectoryIds = (new Ancestry(directories)).getAncestorIds(action.id);
  directories = updateDirectories(directories, openedDirectoryIds, { opened: true });

  return updateObject(state, { directories });
};

const createDirectory = (state, action) => {
  const lastIndex = Math.max(state.directories.map(directory => directory.id));
  const newDirectory = { id: lastIndex + 1, name: action.name, parentId: action.parentId };
  const directories = [...state.directories, newDirectory];

  return updateObject(state, { directories });
};

const removeDirectory = (state, action) => {
  const siblingIds = (new Ancestry(state.directories)).getSiblingIds(action.id);
  const ids = [action.id, ...siblingIds];

  const directories = state.directories.filter(directory => !ids.includes(directory.id));

  return updateObject(state, { directories });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_DIRECTORY: return openDirectory(state, action);
    case actionTypes.CLOSE_DIRECTORY: return closeDirectory(state, action);
    case actionTypes.SELECT_DIRECTORY: return selectDirectory(state, action);
    case actionTypes.CREATE_DIRECTORY: return createDirectory(state, action);
    case actionTypes.REMOVE_DIRECTORY: return removeDirectory(state, action);
    default: return state;
  }
};
