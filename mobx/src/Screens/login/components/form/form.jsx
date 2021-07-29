import React, { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Input, Button } from 'Components';

import * as Styled from './styled';
import { AuthContext } from '../../context';

export const Form = observer(({ onSubmit }) => {
  const authModel = useContext(AuthContext);
  const [formValues, setFormValues] = useState({ login: '', password: '' });
  const [formErrors, setFormErrors] = useState({ login: '', password: '' });

  useEffect(() => {
    if (authModel.error) {
      setTimeout(() => authModel.resetMeta(), 3000);
    }
  }, [authModel.error, authModel.resetMeta]);

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
        {authModel.error && (
          <Styled.GlobalError>
            {authModel.error}
          </Styled.GlobalError>
        )}
      </Styled.FormContentWrapper>
    </>
  );
});
