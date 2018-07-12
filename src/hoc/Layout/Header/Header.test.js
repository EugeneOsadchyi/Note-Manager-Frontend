import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Header from './Header';

describe('Header', () => {
  const title = 'Notes Manager';
  const header = shallow(<Header title={title} />);

  it('renders properly', () => {
    expect(shallowToJson(header)).toMatchSnapshot();
  });

  it('contains correct title', () => {
    expect(header.text()).toEqual(title);
  });
});
