import deepFreeze from 'deep-freeze';

import * as actionTypes from '../actions/actionTypes';
import reducer from './directory';

describe('Directory reducer', () => {
  let initialState = {
    directories: [{
      id: 1, name: 'Closed directory', opened: false, active: false,
    }, {
      id: 2, name: 'Opened directory', opened: true, active: true,
    }],
  };

  deepFreeze(initialState);

  it('returns initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        directories: [],
      });
  });

  describe('when opens the directory', () => {
    describe('and directoryId is valid', () => {
      it('sets directory `opened` property to true', () => {
        const expectedState = {
          directories: [{
            id: 1, name: 'Closed directory', opened: true, active: false,
          }, {
            id: 2, name: 'Opened directory', opened: true, active: true,
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
    describe('and directoryId is valid', () => {
      it('sets directory `opened` property to false', () => {
        const expectedState = {
          directories: [{
            id: 1, name: 'Closed directory', opened: false, active: false,
          }, {
            id: 2, name: 'Opened directory', opened: false, active: true,
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
    beforeEach(() => {
      initialState = {
        directories: [{
          id: 1, name: 'Directory 1', opened: false, active: false,
        }, {
          id: 2, name: 'Directory 2', opened: false, active: true,
        }, {
          id: 3, name: 'Directory 1.1', opened: false, active: false,
        }, {
          id: 4, name: 'Directory 1.2', opened: false, active: false,
        }, {
          id: 5, name: 'Directory 1.1.1', opened: false, active: false,
        }],
      };

      deepFreeze(initialState);
    });

    it('sets directory `active` property to true and resets other directories `active` property to false', () => {
      const expectedState = {
        directories: [{
          id: 1, name: 'Directory 1', opened: false, active: true,
        }, {
          id: 2, name: 'Directory 2', opened: false, active: false,
        }, {
          id: 3, name: 'Directory 1.1', opened: false, active: false,
        }, {
          id: 4, name: 'Directory 1.2', opened: false, active: false,
        }, {
          id: 5, name: 'Directory 1.1.1', opened: false, active: false,
        }],
      };

      expect(reducer(initialState, { type: actionTypes.SELECT_DIRECTORY, id: 1 }))
        .toEqual(expectedState);
    });

    it('sets parent directories\' `opened` property to true', () => {
      const expectedState = {
        directories: [{
          id: 1, name: 'Directory 1', opened: true, active: false,
        }, {
          id: 2, name: 'Directory 2', opened: true, active: false,
        }, {
          id: 3, name: 'Directory 1.1', opened: true, active: false,
        }, {
          id: 4, name: 'Directory 1.2', opened: false, active: false,
        }, {
          id: 5, name: 'Directory 1.1.1', opened: false, active: true,
        }],
      };

      expect(reducer(initialState, { type: actionTypes.SELECT_DIRECTORY, id: 5 }))
        .toEqual(expectedState);
    });
  });
});
