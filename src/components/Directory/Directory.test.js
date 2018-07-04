import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Directory from './Directory';

describe('Directory', () => {
  const name = 'Test Directory';
  let props = { name };
  let directory = shallow(<Directory {...props} />);

  it('renders properly', () => {
    expect(shallowToJson(directory)).toMatchSnapshot();
  });

  it('displays directory name from the props', () => {
    expect(directory.find('.name').text()).toEqual(name);
  });

  describe('when receives `opened` value from the props', () => {
    beforeEach(() => {
      props = { name, opened: true };
      directory = shallow(<Directory {...props} />);
    });

    it('displays `folder-open` icon', () => {
      expect(directory.find('.icon .folder-open').exists()).toBe(true);
    });
  });

  describe('when receives not `opened` value from the props', () => {
    beforeEach(() => {
      props = { name, opened: false };
      directory = shallow(<Directory {...props} />);
    });

    it('displays `folder` icon', () => {
      expect(directory.find('.icon .folder').exists()).toBe(true);
    });
  });
});
