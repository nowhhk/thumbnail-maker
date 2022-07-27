import React from 'react';
import styled from 'styled-components';

const Footer = (props) => (
  <FooterLayout>
    <i
      class="fab fa-github"
      onClick={() => window.open('https://github.com/nowhhk/maker', '_blank')}
    ></i>
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
  color: ${({ theme }) => theme.color.makerBlack};

  i {
    font-size: 1.5em;
    cursor: pointer;
  }
`;
