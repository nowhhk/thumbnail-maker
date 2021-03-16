import React, { useEffect, useState } from 'react';

import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Maker = ({ FileInput, authService }) => {
  const history = useHistory();

  const [cards, setCards] = useState({
    1: {
      id: '1',
      title: 'Hahahahahahahah',
      subtitle: 'hohohohohohohoo!!',
      theme: 'border',
      fileName: '파일이름',
      fileURL:
        'https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11289037&thumbAt=Y&thumbSe=t_thumb&wrtTy=10006&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wNTIzX251cmltZWRpYV8yMDE1MTIwMw==',
      fontColor: 'white',
      sub: null,
    },
    2: {
      id: '2',
      title: '펭-하',
      subtitle: '!!',
      theme: 'border-red',
      fileName: '파일파일',
      fileURL:
        'http://img.khan.co.kr/news/2019/11/08/l_2019110801001014500075872.jpg',
      fontColor: 'black',
      sub: 'sdgsdg',
    },
  });

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

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  const updateCard = (card) => {
    // const updated = { ...cards };
    // updated[card.id] = card;
    // setCards(updated);
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  return (
    <Section>
      <Header onLogout={onLogout} />
      <Container>
        <Editor
          FileInput={FileInput}
          cards={cards}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
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
