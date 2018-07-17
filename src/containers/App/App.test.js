import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(shallowToJson(app)).toMatchSnapshot();
  });

  // it('contains the connected explorer component', () => {
  //   expect(app.find('Connect(Explorer)').exists()).toBe(true);
  // });
});
