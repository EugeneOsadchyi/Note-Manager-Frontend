import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Button from './Button';

describe('Button', () => {
  const mockClicked = jest.fn();

  const props = {
    disabled: false,
    btnType: 'Success',
    clicked: mockClicked,
  };

  const children = 'My Button';

  let button = shallow((
    <Button {...props}>
      {children}
    </Button>
  ));

  afterEach(() => mockClicked.mockReset());

  it('renders properly', () => {
    expect(shallowToJson(button)).toMatchSnapshot();
  });

  describe('when button is enabled', () => {
    beforeEach(() => {
      props.disabled = false;

      button = mount((
        <Button {...props}>
          {children}
        </Button>
      ));
    });


    describe('and button was clicked', () => {
      beforeEach(() => button.simulate('click'));

      it('dispatches `clicked()` method it receives from props', () => {
        expect(mockClicked).toHaveBeenCalled();
      });
    });
  });

  describe('when button is disabled', () => {
    beforeEach(() => {
      props.disabled = true;

      button = mount((
        <Button {...props}>
          {children}
        </Button>
      ));
    });

    it('renders properly', () => {
      expect(shallowToJson(button)).toMatchSnapshot();
    });

    describe('and button was clicked', () => {
      beforeEach(() => button.simulate('click'));

      it('does not dispatch `clicked()` method it receives from props', () => {
        expect(mockClicked).not.toHaveBeenCalled();
      });
    });
  });
});
