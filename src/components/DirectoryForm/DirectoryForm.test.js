import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import DirectoryForm from './DirectoryForm';

describe('DirectoryForm', () => {
  const mockSaveClicked = jest.fn();
  const mockCancelClicked = jest.fn();

  const directoryName = 'New Directory';

  const props = {
    directoryId: undefined,
    directoryName: '',
    saveClicked: mockSaveClicked,
    cancelClicked: mockCancelClicked,
  };

  let directoryForm = shallow(<DirectoryForm {...props} />);

  beforeEach(() => {
    mockSaveClicked.mockReset();
    mockCancelClicked.mockReset();
  });

  it('renders properly', () => {
    expect(shallowToJson(directoryForm)).toMatchSnapshot();
  });

  it('contains input component', () => {
    expect(directoryForm.find('Input').exists()).toBe(true);
  });

  it('contains button components', () => {
    expect(directoryForm.find('Button').length).toEqual(2);
  });

  describe('when directory name is set', () => {
    beforeEach(() => {
      props.directoryName = directoryName;
      directoryForm = mount(<DirectoryForm {...props} />);
    });

    it('input component pre-files with directory name', () => {
      expect(directoryForm.find('Input').props().value).toEqual(directoryName);
    });

    describe('and save button was clicked', () => {
      beforeEach(() => {
        directoryForm.find('.btn-save').simulate('click');
      });

      it('dispatches `saveClicked()` it received from the props', () => {
        expect(mockSaveClicked).toHaveBeenCalled();
      });
    });
  });

  describe('when directory name is not set', () => {
    beforeEach(() => {
      props.directoryName = '';
      directoryForm = mount(<DirectoryForm {...props} />);
    });

    describe('and save button was clicked', () => {
      beforeEach(() => {
        directoryForm.find('.btn-save').simulate('click');
      });

      it('does not dispatch `saveClicked()` it received from the props', () => {
        expect(mockSaveClicked).not.toHaveBeenCalled();
      });
    });
  });
});
