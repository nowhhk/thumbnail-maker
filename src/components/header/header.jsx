import React from 'react';
import styled from 'styled-components';

const Header = ({ userId, onLogout }) => (
  <HeaderLayout>
    {userId && (
      <LogoutBtn onClick={onLogout}>
        <i className="fas fa-sign-out-alt"></i>
      </LogoutBtn>
    )}
    <h1>Thumbnail Maker</h1>
  </HeaderLayout>
);

export default Header;

//styled-component

const HeaderLayout = styled.header`
  width: 100%;
  height: 6em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.makerGreen};
  color: ${({ theme }) => theme.color.makerBlack};
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  position: relative;
  h1 {
    font-size: 1.5em;
    font-family: 'Signika', sans-serif;
  }
`;

const LogoutBtn = styled.button`
  position: absolute;
  right: 0.7em;
  top: 0.7em;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.makerBlack};
  cursor: pointer;
`;
