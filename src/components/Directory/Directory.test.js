import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Directory from './Directory';

describe('Directory', () => {
  const name = 'Test Directory';
  const props = { name };
  const directory = shallow(<Directory {...props} />);

  it('renders properly', () => {
    expect(shallowToJson(directory)).toMatchSnapshot();
  });

  it('displays directory name from the props', () => {
    expect(directory.find('.name').text()).toEqual(name);
  });
});
