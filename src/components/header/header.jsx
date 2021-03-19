import React from 'react';
import styled from 'styled-components';

const Header = ({ onLogout }) => (
  <HeaderLayout>
    {onLogout && <button onClick={onLogout}>Logout</button>}
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

  h1 {
    font-size: 1.5em;
  }
`;
