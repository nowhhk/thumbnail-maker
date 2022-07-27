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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  background-color: ${({ theme }) => theme.color.makerYellow};
  ul {
    margin: 1.5em 1em;
    li {
      margin: 0.3em 0;
    }
  }
`;

const Buttons = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.color.makerBlack};
  font-weight: bold;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 1em;
  border-radius: 4px;
  border: none;

  background-color: ${({ theme }) => theme.color.makerWhite};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
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
