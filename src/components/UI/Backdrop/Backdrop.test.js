import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Backdrop from './Backdrop';

describe('Backdrop', () => {
  const mockClicked = jest.fn();

  const props = {
    show: true,
    clicked: mockClicked,
  };

  const backdrop = shallow(<Backdrop {...props} />);

  it('renders properly', () => {
    expect(shallowToJson(backdrop)).toMatchSnapshot();
  });

  describe('when backdrop clicked', () => {
    beforeEach(() => backdrop.simulate('click'));

    it('triggers clicked() function', () => {
      expect(mockClicked).toHaveBeenCalled();
    });
  });
});
