import React, { useState, useCallback } from 'react';

import * as Styled from './styled';
import { Form, SuccessSign } from './components';

export const LoginScreen = () => {
  const [success, setSuccess] = useState(false);

  const onSuccess = useCallback(() => {
    setSuccess(true);
  }, []);

  return (
    <Styled.RootWrapper>
      <Styled.FormWrapper>
        {success
          ? <SuccessSign />
          : <Form onSuccess={onSuccess} />}
      </Styled.FormWrapper>
    </Styled.RootWrapper>
  );
};
