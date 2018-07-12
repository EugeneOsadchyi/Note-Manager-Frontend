import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Layout from './Layout';

describe('Layout', () => {
  const children = (
    <h1>
      Some child component
    </h1>
  );

  const layout = shallow((
    <Layout>
      {children}
    </Layout>
  ));

  it('renders properly', () => {
    expect(shallowToJson(layout)).toMatchSnapshot();
  });
});
