import React from 'react';
import styled from 'styled-components';

const Footer = (props) => (
  <FooterLayout>
    <i class="fab fa-github"></i>
  </FooterLayout>
);

export default Footer;

const FooterLayout = styled.header`
  width: 100%;
  height: 3.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.makerGreen};
  color: ${({ theme }) => theme.color.makerWhite};

  i {
    font-size: 1.5em;
  }
`;
