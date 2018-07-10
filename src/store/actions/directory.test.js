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

  it('creates an action to select the directory', () => {
    const expectedAction = { type: actionTypes.SELECT_DIRECTORY, id };

    expect(actions.selectDirectory(id)).toEqual(expectedAction);
  });

  it('creates an action to create a directory', () => {
    const parentId = 1;
    const name = 'Child Directory';

    const expectedAction = { type: actionTypes.CREATE_DIRECTORY, name, parentId };

    expect(actions.createDirectory(name, parentId)).toEqual(expectedAction);
  });

  it('creates an action to remove a directory', () => {
    const expectedAction = { type: actionTypes.REMOVE_DIRECTORY, id };

    expect(actions.removeDirectory(id)).toEqual(expectedAction);
  });
});
