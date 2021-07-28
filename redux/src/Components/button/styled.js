import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  border: 2px solid #7676d0;
  padding: 5px 10px;
  background: #fff;
  color: #000;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #7676d0;
    color: #fff;
  }
`;
