import React, { useEffect } from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };
  const onLogin = (text) => {
    authService.login(text).then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <Section>
      <Header onLogout />
      <section>
        <ul>
          <li>
            <Buttons onClick={() => onLogin('Google')}>
              <i className="fab fa-google google icon"></i>Google로 로그인하기
            </Buttons>
          </li>
          <li>
            <Buttons onClick={() => onLogin('Github')}>
              <i className="fab fa-github github icon"></i>Github으로 로그인하기
            </Buttons>
          </li>
        </ul>
      </section>
      <Footer />
    </Section>
  );
};

export default Login;

//styled-component

const Section = styled.section`
  width: 30em;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  background-color: ${({ theme }) => theme.color.makerWhite};
  ul {
    margin: 1.5em 1em;
    li {
      margin: 0.3em 0;
    }
  }
`;

const Buttons = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.color.makerGreen};
  font-weight: bold;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 1em;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.makerWhite};

  &:hover {
    opacity: 0.8;
  }

  .icon {
    font-size: 1.2em;
    float: left;
    &.google {
      color: #1a73e8;
    }
  }
`;
