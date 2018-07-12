import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Layout from './Layout';

describe('Layout', () => {
  const layout = shallow((
    <Layout>
      <h1>
        Some child component
      </h1>
    </Layout>
  ));

  it('renders properly', () => {
    expect(shallowToJson(layout)).toMatchSnapshot();
  });
});
