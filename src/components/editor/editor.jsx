import Card from '../card/card';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import React from 'react';
import styled from 'styled-components';

const Editor = ({ FileInput, cards, updateCard, deleteCard }) => (
  <Section>
    <Title>Thumbnail Maker</Title>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        key={key}
        FileInput={FileInput}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm FileInput={FileInput} onAdd={updateCard} />
  </Section>
);

export default Editor;

const Section = styled.section`
  flex-basis: 50%;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color.makerGreen};
`;
