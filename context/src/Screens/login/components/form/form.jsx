import React, { useState, useEffect } from 'react';

import { Input, Button } from 'Components';
import { login } from 'Api';

import * as Styled from './styled';

export const Form = ({ onSuccess }) => {
  const [globalError, setGlobalError] = useState('');
  const [formValues, setFormValues] = useState({ login: '', password: '' });
  const [formErrors, setFormErrors] = useState({ login: '', password: '' });

  useEffect(() => {
    if (globalError) {
      setTimeout(() => setGlobalError(''), 3000);
    }
  }, [globalError]);

  const onChange = (name, value) => {
    setFormErrors({
      ...formErrors,
      [name]: value ? '' : formErrors[name],
    });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const errors = {
      login: values.login ? '' : 'Field is required',
      password: values.password ? '' : 'Field is required',
    };

    setFormErrors(errors);

    return Boolean(values.login && values.password);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const isFormValid = validateForm(formValues);

    if (isFormValid) {
      login(formValues)
        .then(onSuccess)
        .catch(error => setGlobalError(error));
    }
  };

  return (
    <>
      <Styled.Title>Login</Styled.Title>
      <Styled.FormContentWrapper>
        <form action="#" onSubmit={onSubmit}>
          <Input
            name="login"
            onChange={onChange}
            error={formErrors.login}
          />
          <Input
            name="password"
            type="password"
            onChange={onChange}
            error={formErrors.password}
          />
          <Button
            type="submit"
          >
            Login
          </Button>
        </form>
        {globalError && (
          <Styled.GlobalError>
            {globalError}
          </Styled.GlobalError>
        )}
      </Styled.FormContentWrapper>
    </>
  );
};
