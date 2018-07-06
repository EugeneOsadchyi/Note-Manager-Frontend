import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Directory from './Directory';

describe('Directory', () => {
  const name = 'Test Directory';
  const opened = false;
  const mockFolderClicked = jest.fn();
  const mockDoubleClicked = jest.fn();

  const props = {
    name,
    opened,
    folderClicked: mockFolderClicked,
    doubleClicked: mockDoubleClicked,
  };
  let directory = shallow(<Directory {...props} />);

  it('renders properly', () => {
    expect(shallowToJson(directory)).toMatchSnapshot();
  });

  it('displays directory name from the props', () => {
    expect(directory.find('.name').text()).toEqual(name);
  });

  describe('when `opened` is received from the props', () => {
    beforeEach(() => {
      props.opened = true;
      directory = mount(<Directory {...props} />);
    });

    it('displays `fa-folder-open` icon', () => {
      expect(directory.find('.icon .fa-folder-open').exists()).toBe(true);
    });
  });

  describe('when not `opened` is reveived from the props', () => {
    beforeEach(() => {
      props.opened = false;
      directory = mount(<Directory {...props} />);
    });

    it('displays `fa-folder` icon', () => {
      expect(directory.find('.icon .fa-folder').exists()).toBe(true);
    });
  });

  describe('when directory icon was clicked', () => {
    beforeEach(() => directory.find('.icon').simulate('click'));

    it('dispatches the `folderClicked()` it receives from the props', () => {
      expect(mockFolderClicked).toHaveBeenCalled();
    });
  });

  describe('when directory name was double-clicked', () => {
    beforeEach(() => directory.find('.name').simulate('doubleclick'));

    it('dispatches the `doubleClicked()` it receives from the props', () => {
      expect(mockDoubleClicked).toHaveBeenCalled();
    });
  });
});
