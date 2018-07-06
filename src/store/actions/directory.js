import * as actionTypes from './actionTypes';

export const openDirectory = id => ({ type: actionTypes.OPEN_DIRECTORY, id });
export const closeDirectory = id => ({ type: actionTypes.CLOSE_DIRECTORY, id });