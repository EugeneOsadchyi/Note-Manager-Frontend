import * as actionTypes from './actionTypes';
import * as actions from './directory';

describe('Directory actions', () => {
  const id = 1;

  it('creates an action to open the directory', () => {
    const expectedAction = { type: actionTypes.OPEN_DIRECTORY, id };

    expect(actions.openDirectory(id)).toEqual(expectedAction);
  });

  it('creates an action to close the directory', () => {
    const expectedAction = { type: actionTypes.CLOSE_DIRECTORY, id };

    expect(actions.closeDirectory(id)).toEqual(expectedAction);
  });
});
