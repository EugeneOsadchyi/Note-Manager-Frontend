import React, { Component } from 'react';
import PropTypes from 'prop-types';

import updateObject from '../../utils/updateObject';
import { checkValidity } from '../../utils/validation';

import Input from '../UI/Input';
import Button from '../UI/Button';

class DirectoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      directoryForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Directory Name',
          },
          value: props.directoryName,
          validation: {
            required: true,
          },
          valid: false,
        },
      },
      formIsValid: false,
    };
  }

  saveClickedHandler(event) {
    event.preventDefault();

    const {
      directoryForm,
    } = this.state;

    const {
      directoryId,
      saveClicked,
    } = this.props;

    const formData = {};

    Object.keys(directoryForm).forEach((formElementIdentifier) => {
      formData[formElementIdentifier] = directoryForm[formElementIdentifier].value;
    });

    const directory = {
      directoryId,
      directoryData: formData,
    };

    saveClicked(directory);
  }

  inputChangedHandler(event, inputIdentifier) {
    const { directoryForm } = this.state;

    const updatedFormElement = updateObject(directoryForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, directoryForm[inputIdentifier].validation),
      touched: true,
    });

    const updatedDirectoryForm = updateObject(directoryForm, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    Object.keys(updatedDirectoryForm).forEach((fieldName) => {
      formIsValid = updatedDirectoryForm[fieldName].valid && formIsValid;
    });

    this.setState({ directoryForm: updatedDirectoryForm, formIsValid });
  }

  render() {
    const {
      cancelClicked,
    } = this.props;

    const {
      directoryForm,
      formIsValid,
    } = this.state;

    const formElementsArray = [];
    Object.keys(directoryForm).forEach((key) => {
      formElementsArray.push({
        id: key,
        config: directoryForm[key],
      });
    });

    return (
      <form onSubmit={this.saveClickedHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType="btn-cancel" clicked={cancelClicked}>
          Cancel
        </Button>
        <Button btnType="Success btn-save" disabled={!formIsValid}>
          Save
        </Button>
      </form>
    );
  }
}

DirectoryForm.propTypes = {
  directoryId: PropTypes.number,
  directoryName: PropTypes.string,
  saveClicked: PropTypes.func.isRequired,
  cancelClicked: PropTypes.func.isRequired,
};

DirectoryForm.defaultProps = {
  directoryId: undefined,
  directoryName: '',
};

export default DirectoryForm;
