import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import * as Styled from './styled';
import { Form, SuccessSign } from './components';
import { AuthContext } from './context';

export const LoginScreen = observer(() => {
  const authModel = useContext(AuthContext);

  const onSubmit = (formValues) => {
    authModel.login(formValues);
  };

  return (
    <Styled.RootWrapper>
      <Styled.FormWrapper>
        {authModel.token
          ? <SuccessSign />
          : <Form onSubmit={onSubmit} />}
      </Styled.FormWrapper>
    </Styled.RootWrapper>
  );
});
