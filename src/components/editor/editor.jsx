import Card from '../card/card';
import CardEditForm from '../card_edit_form/card_edit-form';
import React from 'react';
import styled from 'styled-components';

const Editor = ({ cards }) => (
  <Section>
    <Title>Thumbnail Maker</Title>
    {cards.map((card) => (
      <CardEditForm card={card} />
    ))}
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
