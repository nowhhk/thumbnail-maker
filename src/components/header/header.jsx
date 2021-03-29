import React from 'react';
import styled from 'styled-components';

const Header = ({ userId, onLogout }) => (
  <HeaderLayout>
    {userId && (
      <LogoutBtn onClick={onLogout}>
        <i class="fas fa-sign-out-alt"></i>
      </LogoutBtn>
    )}
    <h1>Thumbnail Maker</h1>
  </HeaderLayout>
);

export default Header;

//styled-component

const HeaderLayout = styled.header`
  width: 100%;
  height: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.makerGreen};
  color: ${({ theme }) => theme.color.makerWhite};
  position: relative;
  h1 {
    font-size: 1.5em;
  }
`;

const LogoutBtn = styled.button`
  position: absolute;
  right: 0.7em;
  top: 0.7em;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.makerWhite};
  cursor: pointer;
`;
