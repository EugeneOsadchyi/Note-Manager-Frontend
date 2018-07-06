import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../utils/updateObject';

const initialState = {
  directories: [],
};

const updateDirectories = (state, action, updatedProperties) => (
  state.directories.map((directory) => {
    if (directory.id !== action.id) {
      return directory;
    }
    return updateObject(directory, updatedProperties);
  })
);

const openDirectory = (state, action) => {
  const directories = updateDirectories(state, action, { opened: true });
  return updateObject(state, { directories });
};

const closeDirectory = (state, action) => {
  const directories = updateDirectories(state, action, { opened: false });
  return updateObject(state, { directories });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_DIRECTORY: return openDirectory(state, action);
    case actionTypes.CLOSE_DIRECTORY: return closeDirectory(state, action);
    default: return state;
  }
};
