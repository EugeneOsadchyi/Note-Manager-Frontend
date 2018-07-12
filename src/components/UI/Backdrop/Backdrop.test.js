import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Backdrop from './Backdrop';

describe('Backdrop', () => {
  const mockClicked = jest.fn();

  describe('when Backdrop is visible', () => {
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

  describe('when Backdrop is hidden', () => {
    const props = {
      show: false,
      clicked: mockClicked,
    };

    const backdrop = shallow(<Backdrop {...props} />);

    it('renders properly', () => {
      expect(shallowToJson(backdrop)).toMatchSnapshot();
    });

    it('does not contain Backdrop node', () => {
      expect(backdrop.find('.Backdrop').exists()).toBe(false);
    });
  });
});
