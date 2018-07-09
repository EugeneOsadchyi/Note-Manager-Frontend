import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Directory from './Directory';

describe('Directory', () => {
  const name = 'Test Directory';
  const opened = false;
  const active = false;
  const mockClicked = jest.fn();
  const mockDoubleClicked = jest.fn();
  const mockFolderClicked = jest.fn();

  const props = {
    name,
    opened,
    active,
    clicked: mockClicked,
    doubleClicked: mockDoubleClicked,
    folderClicked: mockFolderClicked,
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

    it('displays opened folder icon', () => {
      expect(directory.find('.icon .fa-folder-open').exists()).toBe(true);
    });
  });

  describe('when not `opened` is received from the props', () => {
    beforeEach(() => {
      props.opened = false;
      directory = mount(<Directory {...props} />);
    });

    it('displays closed folder icon', () => {
      expect(directory.find('.icon .fa-folder').exists()).toBe(true);
    });
  });

  describe('when directory name was double-clicked', () => {
    beforeEach(() => directory.find('.name').simulate('doubleclick'));

    it('dispatches the `doubleClicked()` it receives from the props', () => {
      expect(mockDoubleClicked).toHaveBeenCalled();
    });
  });

  describe('when directory icon was clicked', () => {
    beforeEach(() => directory.find('.icon').simulate('click'));

    it('dispatches the `folderClicked()` it receives from the props', () => {
      expect(mockFolderClicked).toHaveBeenCalled();
    });
  });

  describe('when directory was clicked', () => {
    beforeEach(() => directory.simulate('click'));

    it('dispatched the `clicked()` it receives from the props', () => {
      expect(mockClicked).toHaveBeenCalled();
    });
  });

  describe('when `active` is received from the props', () => {
    beforeEach(() => {
      props.active = true;
      directory = shallow(<Directory {...props} />);
    });

    it('renders properly', () => {
      expect(shallowToJson(directory)).toMatchSnapshot();
    });

    it('highlights the directory', () => {
      expect(directory.find('.active').exists()).toBe(true);
    });
  });
});
