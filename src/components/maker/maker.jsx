import React, { useEffect, useState } from 'react';

import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Maker = ({ authService }) => {
  const history = useHistory();

  const [cards, setCards] = useState([
    {
      id: '1',
      title: 'Hahahahahahahah',
      subtitle: 'hohohohohohohoo!!',
      theme: 'border',
      fileName: 'hi',
      fileURL:
        'https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11289037&thumbAt=Y&thumbSe=t_thumb&wrtTy=10006&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wNTIzX251cmltZWRpYV8yMDE1MTIwMw==',
      fontColor: 'white',
      sub: null,
    },
    {
      id: '2',
      title: '펭-하',
      subtitle: '!!',
      theme: 'border-red',
      fileName: 'hi',
      fileURL:
        'http://img.khan.co.kr/news/2019/11/08/l_2019110801001014500075872.jpg',
      fontColor: 'black',
      sub: 'sdgsdg',
    },
    {
      id: '3',
      title: 'adsfads',
      subtitle: 'hohohohohohohoo!!',
      theme: null,
      fileName: 'hi',
      fileURL: null,
      fontColor: 'white',
      sub: 'sdgsdg',
    },
  ]);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <Section>
      <Header onLogout={onLogout} />
      <Container>
        <Editor cards={cards} />
        <Preview cards={cards} />
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
  }
`;
