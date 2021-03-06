import React from 'react';

import { useContextSelector } from 'Hooks';

import * as Styled from './styled';
import { Form, SuccessSign } from './components';

export const LoginScreen = () => {
  const authSlice = useContextSelector('auth');
  const { token } = authSlice.state;
  const { login } = authSlice.handlers;

  const onSubmit = (formValues) => {
    login(formValues);
  };

  return (
    <Styled.RootWrapper>
      <Styled.FormWrapper>
        {token
          ? <SuccessSign />
          : <Form onSubmit={onSubmit} />}
      </Styled.FormWrapper>
    </Styled.RootWrapper>
  );
};
