import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Explorer } from './Explorer';

describe('Explorer', () => {
  const mockOnSelectDirectory = jest.fn();
  const mockOnOpenDirectory = jest.fn();
  const mockOnCloseDirectory = jest.fn();

  const defaultProps = {
    directories: [
      {
        id: 1, name: 'Root', parentId: null, opened: true, active: true,
      }, {
        id: 2, name: 'Child', parentId: 1, opened: false, active: false,
      },
    ],
    onSelectDirectory: mockOnSelectDirectory,
    onOpenDirectory: mockOnOpenDirectory,
    onCloseDirectory: mockOnCloseDirectory,
  };

  const explorer = shallow(<Explorer {...defaultProps} />);

  it('renders properly', () => {
    expect(shallowToJson(explorer)).toMatchSnapshot();
  });

  it('contains DirectoryList component', () => {
    expect(explorer.find('DirectoryList').exists()).toBe(true);
  });

  it('fulfils DirectoryList component with required props', () => {
    const expectedProps = {
      directories: [...defaultProps.directories],
      parentId: undefined,
      selectDirectory: defaultProps.onSelectDirectory,
      openDirectory: defaultProps.onOpenDirectory,
      closeDirectory: defaultProps.onCloseDirectory,
    };
    expect(explorer.find('DirectoryList').props()).toEqual(expectedProps);
  });
});
