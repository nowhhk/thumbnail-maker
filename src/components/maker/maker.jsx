import React, { useEffect } from "react";

import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Maker = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <Section>
      <Header onLogout={onLogout} />
      <Container>
        <Editor />
        <Preview />
      </Container>
      <Footer />
    </Section>
  );
};

export default Maker;

// styled-component

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (max-width: ${(props) =>
      props.theme.size.mediaQuery}) {
    flex-direction: column;
    color: red;
  }
`;
