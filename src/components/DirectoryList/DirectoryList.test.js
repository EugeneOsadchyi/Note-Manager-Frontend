import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import DirectoryList from './DirectoryList';

describe('DirectoryList', () => {
  const mockToggleDirectory = jest.fn();
  const mockEditDirectory = jest.fn();

  describe('when not `directories` are passed', () => {
    const directories = [];

    const props = {
      directories,
      toggleDirectory: mockToggleDirectory,
      editDirectory: mockEditDirectory,
    };

    const directoryList = shallow(<DirectoryList {...props} />);

    it('renders properly', () => {
      expect(shallowToJson(directoryList)).toMatchSnapshot();
    });
  });

  describe('when component is fulfilled with `directories`', () => {
    const directory = {
      id: 1,
      name: 'Test',
      opened: false,
    };
    const directories = [directory];

    const props = {
      directories,
      toggleDirectory: mockToggleDirectory,
      editDirectory: mockEditDirectory,
    };

    const directoryList = shallow(<DirectoryList {...props} />);

    it('renders properly', () => {
      expect(shallowToJson(directoryList)).toMatchSnapshot();
    });

    it('contains Directory component', () => {
      expect(directoryList.find('Directory').exists()).toBe(true);
    });
  });
});
