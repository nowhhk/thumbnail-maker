import React from 'react';
import styled from 'styled-components';

const Button = ({ name, onClick }) => (
  <Buttons onClick={onClick}>{name}</Buttons>
);

export default Button;

const Buttons = styled.button`
  background-color: ${({ theme }) => theme.color.makerGreen};
  color: ${({ theme }) => theme.color.makerWhite};
  font-weight: bold;
  cursor: pointer;
  padding: 0.5em;
  font-size: 0.8rem;
  flex: 1 1 50%;

  &:hover {
    opacity: 0.8;
  }
`;
