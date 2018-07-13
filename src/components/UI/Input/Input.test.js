import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Input from './Input';

describe('Input', () => {
  const input = shallow(<Input />);

  it('renders properly', () => {
    expect(shallowToJson(input)).toMatchSnapshot();
  });
});
