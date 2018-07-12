import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Modal from './Modal';

describe('Modal', () => {
  const mockModalClosed = jest.fn();

  const children = (
    <h1>
      Modal content
    </h1>
  );

  const props = {
    show: true,
    modalClosed: mockModalClosed,
  };

  const modal = shallow((
    <Modal {...props}>
      {children}
    </Modal>
  ));

  it('renders properly', () => {
    expect(shallowToJson(modal)).toMatchSnapshot();
  });

  it('contains Modal element', () => {
    expect(modal.find('.Modal').exists()).toBe(true);
  });

  it('contains Backdrop component', () => {
    expect(modal.find('Backdrop').exists()).toBe(true);
  });

  describe('Backdrop component', () => {
    it('receives `show` and `clicked` props', () => {
      const { show, modalClosed } = props;

      const expectedProps = {
        show,
        clicked: modalClosed,
      };

      expect(modal.find('Backdrop').props()).toEqual(expectedProps);
    });
  });
});
