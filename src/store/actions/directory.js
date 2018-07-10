import * as actionTypes from './actionTypes';

export const openDirectory = id => ({ type: actionTypes.OPEN_DIRECTORY, id });
export const closeDirectory = id => ({ type: actionTypes.CLOSE_DIRECTORY, id });
export const selectDirectory = id => ({ type: actionTypes.SELECT_DIRECTORY, id });

export const createDirectory = (name, parentId) => ({
  type: actionTypes.CREATE_DIRECTORY, name, parentId,
});
export const removeDirectory = id => ({ type: actionTypes.REMOVE_DIRECTORY, id });
