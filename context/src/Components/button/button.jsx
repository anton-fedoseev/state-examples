import React from 'react';

import * as Styled from './styled';

export const Button = ({
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <Styled.Button
      type={type}
      onClick={onClick}
    >
      {children}
    </Styled.Button>
  );
};
