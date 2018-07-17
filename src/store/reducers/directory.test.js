import deepFreeze from 'deep-freeze';

import * as actionTypes from '../actions/actionTypes';
import reducer from './directory';

describe('Directory reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        directories: [],
      });
  });

  describe('when opens the directory', () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        directories: [{
          id: 1, opened: false,
        }, {
          id: 2, opened: true,
        }],
      };

      deepFreeze(initialState);
    });

    describe('and directoryId is valid', () => {
      it('sets directory `opened` property to true', () => {
        const expectedState = {
          directories: [{
            id: 1, opened: true,
          }, {
            id: 2, opened: true,
          }],
        };

        expect(reducer(initialState, { type: actionTypes.OPEN_DIRECTORY, id: 1 }))
          .toEqual(expectedState);
      });
    });

    describe('and directoryId is not valid', () => {
      it('returns unchanged state', () => {
        expect(reducer(initialState, { type: actionTypes.OPEN_DIRECTORY, id: '1' }))
          .toEqual(initialState);
      });
    });
  });

  describe('when closes the directory', () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        directories: [{
          id: 1, opened: false,
        }, {
          id: 2, opened: true,
        }],
      };

      deepFreeze(initialState);
    });

    describe('and directoryId is valid', () => {
      it('sets directory `opened` property to false', () => {
        const expectedState = {
          directories: [{
            id: 1, opened: false,
          }, {
            id: 2, opened: false,
          }],
        };

        expect(reducer(initialState, { type: actionTypes.CLOSE_DIRECTORY, id: 2 }))
          .toEqual(expectedState);
      });
    });

    describe('and directoryId is not valid', () => {
      it('returns unchanged state', () => {
        expect(reducer(initialState, { type: actionTypes.CLOSE_DIRECTORY, id: '2' }))
          .toEqual(initialState);
      });
    });
  });

  describe('when selects the directory', () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        directories: [{
          id: 1, active: false,
        }, {
          id: 2, active: true,
        }, {
          id: 3, active: false,
        }, {
          id: 4, active: false,
        }, {
          id: 5, active: false,
        }],
      };

      deepFreeze(initialState);
    });

    it('sets directory `active` property to true and resets other directories `active` property to false', () => {
      const expectedState = {
        directories: [{
          id: 1, active: true,
        }, {
          id: 2, active: false,
        }, {
          id: 3, active: false,
        }, {
          id: 4, active: false,
        }, {
          id: 5, active: false,
        }],
      };

      expect(reducer(initialState, { type: actionTypes.SELECT_DIRECTORY, id: 1 }))
        .toEqual(expectedState);
    });
  });

  it('creates the directory', () => {
    const name = 'New Directory';
    const parentId = 1;

    const initialState = {
      directories: [{ id: 1, name: 'Directory' }],
    };

    const expectedState = {
      ...initialState,
      directories: [
        ...initialState.directories,
        { id: 2, name, parentId },
      ],
    };

    expect(reducer(initialState, { type: actionTypes.CREATE_DIRECTORY, name, parentId }))
      .toEqual(expectedState);
  });

  it('removes the directory with it\'s nested directories', () => {
    const id = 1;

    const initialState = {
      directories: [
        { id: 1, name: 'Directory 1', parentId: null },
        { id: 2, name: 'Directory 2', parentId: 1 },
        { id: 3, name: 'Directory 3', parentId: 2 },
        { id: 4, name: 'Directory 4', parentId: null },
      ],
    };

    const expectedState = {
      ...initialState,
      directories: [
        { id: 4, name: 'Directory 4', parentId: null },
      ],
    };

    expect(reducer(initialState, { type: actionTypes.REMOVE_DIRECTORY, id }))
      .toEqual(expectedState);
  });
});
