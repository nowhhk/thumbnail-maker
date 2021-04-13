import React, { useEffect, useState } from 'react';

import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const history = useHistory();
  const historyState = history.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.sync(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [authService, history, userId]);

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.remove(userId, card);
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
    cardRepository.save(userId, card);
  };

  return (
    <Section>
      <Header onLogout={onLogout} userId={userId} />
      <Container>
        <Editor
          FileInput={FileInput}
          cards={cards}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} updateCard={updateCard} />
      </Container>
      <Footer />
    </Section>
  );
};

export default Maker;

// styled-component

const Section = styled.section`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.makerYellow};
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  height: calc(100vh - 8em);

  @media only screen and (max-width: ${(props) =>
      props.theme.size.mediaQuery}) {
    flex-direction: column;
  }
`;

//Test

// 1: {
//   id: '1',
//   title: 'Hahahahahahahah',
//   subtitle: 'hohohohohohohoo!!',
//   theme: 'border',
//   fileName: '파일이름',
//   fileURL:
//     'https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11289037&thumbAt=Y&thumbSe=t_thumb&wrtTy=10006&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wNTIzX251cmltZWRpYV8yMDE1MTIwMw==',
//   fontColor: 'white',
//   sub: null,
// },
// 2: {
//   id: '2',
//   title: '펭-하',
//   subtitle: '!!',
//   theme: 'border-red',
//   fileName: '파일파일',
//   fileURL:
//     'http://img.khan.co.kr/news/2019/11/08/l_2019110801001014500075872.jpg',
//   fontColor: 'black',
//   sub: 'sdgsdg',
// },
