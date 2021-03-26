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
  font-size: 0.8rem;
  padding: 1em;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.makerWhite};

  &:hover {
    opacity: 0.8;
  }
`;
