import React from 'react';

import * as Styled from './styled';

export const Input = ({
  type = 'text',
  name,
  placeholder,
  error,
  onChange = () => {},
}) => {
  const onChangeHandler = (event) => {
    const { value } = event.target;

    onChange(name, value);
  };

  return (
    <Styled.Wrapper>
      <Styled.Input
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
      {error && (
        <Styled.Error>
          {error}
        </Styled.Error>
      )}
    </Styled.Wrapper>
  );
};
