import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Input from './Input';

describe('Input', () => {
  const mockChanged = jest.fn();

  const defaultProps = {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'My Input',
    },
    value: '',
    validation: {
      required: true,
    },
    invalid: false,
    touched: true,
    changed: mockChanged,
  };

  let input = shallow(<Input {...defaultProps} />);

  it('renders properly', () => {
    expect(shallowToJson(input)).toMatchSnapshot();
  });

  describe('when elementType is not supported', () => {
    let props;

    beforeEach(() => {
      props = {
        ...defaultProps,
        elementType: 'textarea',
      };

      input = shallow(<Input {...props} />);
    });

    it('renders regular input element', () => {
      expect(input.find('.InputElement').exists()).toBe(true);
    });
  });

  describe('when elementConfig.type is `number`', () => {
    let props;

    beforeEach(() => {
      props = {
        ...defaultProps,
        elementConfig: {
          ...defaultProps.elementConfig,
          type: 'number',
        },
      };

      input = shallow(<Input {...props} />);
    });

    it('renders properly', () => {
      expect(shallowToJson(input)).toMatchSnapshot();
    });
  });

  describe('when input has an error', () => {
    let props;

    beforeEach(() => {
      props = {
        ...defaultProps,
        invalid: true,
      };
      input = shallow(<Input {...props} />);
    });

    it('renders properly', () => {
      expect(shallowToJson(input)).toMatchSnapshot();
    });

    it('contains class invalid', () => {
      expect(input.find('.InputElement').props().className)
        .toEqual(expect.stringContaining('Invalid'));
    });
  });

  describe('when user types into the input', () => {
    const inputValue = 'New Input Value';

    beforeEach(() => {
      mockChanged.mockReset();

      input.find('.InputElement')
        .simulate('change', { event: { target: inputValue } });
    });

    it('dispatches the `changed()` it receives from the props', () => {
      expect(mockChanged).toHaveBeenCalled();
    });
  });

  describe('when input value is set via props', () => {
    const inputValue = 'Input Value';
    let props;

    beforeEach(() => {
      props = {
        ...defaultProps,
        value: inputValue,
      };

      input = shallow(<Input {...props} />);
    });

    it('pre-fils input value', () => {
      expect(input.find('.InputElement').prop('value')).toEqual(inputValue);
    });
  });
});
