import React from 'react';
import styled from "styled-components";

const Header = ({onLogout}) => (
  <HeaderLayout>
    {onLogout && (<button onClick={onLogout}>Logout</button>)}
    <h1>Thumbnail Maker</h1>
  </HeaderLayout>
)


export default Header;

//styled-component

const HeaderLayout = styled.header`
  width: 100%;
  text-align: center;
  padding: 0.5em;
  background-color: ${(props) => props.theme.color.makerGreen};
`