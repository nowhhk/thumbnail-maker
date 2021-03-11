import React from 'react';
import styled from "styled-components";

const Footer = (props) => (
    <FooterLayout>
      <h1>Footer</h1>
    </FooterLayout>)

export default Footer;


const FooterLayout = styled.header`
  width: 100%;
  text-align: center;
  padding: 0.5em;
  background-color: ${(props) => props.theme.color.makerGreen};
`