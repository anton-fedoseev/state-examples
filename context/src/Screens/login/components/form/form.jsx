import React, { useState, useEffect } from 'react';

import { Input, Button } from 'Components';
import { useContextSelector } from 'Hooks';

import * as Styled from './styled';

export const Form = ({ onSubmit }) => {
  const authSlice = useContextSelector('auth');
  const { error } = authSlice.state;
  const { resetMeta } = authSlice.handlers;

  const [formValues, setFormValues] = useState({ login: '', password: '' });
  const [formErrors, setFormErrors] = useState({ login: '', password: '' });

  useEffect(() => {
    if (error) {
      setTimeout(() => resetMeta(), 3000);
    }
  }, [error]);

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

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const isFormValid = validateForm(formValues);

    if (isFormValid) {
      onSubmit(formValues);
    }
  };

  return (
    <>
      <Styled.Title>Login</Styled.Title>
      <Styled.FormContentWrapper>
        <form action="#" onSubmit={onSubmitHandler}>
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
        {error && (
          <Styled.GlobalError>
            {error}
          </Styled.GlobalError>
        )}
      </Styled.FormContentWrapper>
    </>
  );
};
