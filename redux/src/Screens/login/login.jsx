import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from 'Store/auth';

import * as Styled from './styled';
import { Form, SuccessSign } from './components';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const onSubmit = (formValues) => {
    dispatch(login(formValues));
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
