import Card from '../card/card';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import React from 'react';
import styled from 'styled-components';

const Editor = ({ cards, updateCard, deleteCard }) => (
  <Section>
    <Title>Thumbnail Maker</Title>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        key={key}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm onAdd={updateCard} />
  </Section>
);

export default Editor;

const Section = styled.section`
  flex-basis: 50%;
  background-color: pink;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color.makerGreen};
`;
