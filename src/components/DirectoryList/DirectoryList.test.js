import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import DirectoryList from './DirectoryList';

describe('DirectoryList', () => {
  const mockSelectDirectory = jest.fn();
  const mockToggleDirectory = jest.fn();
  const mockEditDirectory = jest.fn();

  const mockedFunctions = {
    selectDirectory: mockSelectDirectory,
    toggleDirectory: mockToggleDirectory,
    editDirectory: mockEditDirectory,
  };

  describe('when `directories` are not passed', () => {
    const props = {
      directories: [],
      ...mockedFunctions,
    };

    const directoryList = shallow(<DirectoryList {...props} />);

    it('renders properly', () => {
      expect(shallowToJson(directoryList)).toMatchSnapshot();
    });

    it('does not contain Directory component', () => {
      expect(directoryList.find('Directory').exists()).toBe(false);
    });
  });

  describe('when component is fulfilled with `directories`', () => {
    const directories = [{
      id: 1,
      name: 'Root',
      opened: true,
      active: true,
    }];

    const props = {
      directories,
      ...mockedFunctions,
    };

    const directoryList = shallow(<DirectoryList {...props} />);

    it('renders properly', () => {
      expect(shallowToJson(directoryList)).toMatchSnapshot();
    });

    it('contains Directory component', () => {
      expect(directoryList.find('Directory').exists()).toBe(true);
    });

    describe('when directory is opened', () => {
      it('contains DirectoryList component', () => {
        expect(directoryList.find('DirectoryList').exists()).toBe(true);
      });
    });
  });
});
