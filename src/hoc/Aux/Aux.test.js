import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Aux from './Aux';

describe('Aux', () => {
  const aux = shallow((
    <Aux>
      <h1>
        Header 1
      </h1>
      <h2>
        Header 2
      </h2>
      <h3>
        Header 3
      </h3>
    </Aux>
  ));

  it('renders properly', () => {
    expect(shallowToJson(aux)).toMatchSnapshot();
  });
});
