import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Footer from './Footer';

describe('Footer', () => {
  const footer = shallow(<Footer />);

  it('renders properly', () => {
    expect(shallowToJson(footer)).toMatchSnapshot();
  });
});
