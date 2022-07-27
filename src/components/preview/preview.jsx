import Card from '../card/card';
import React from 'react';
import styled from 'styled-components';

const Preview = ({ cards, updateCard }) => (
  <Section>
    <ul>
      {Object.keys(cards).map((key) => (
        <Card key={key} card={cards[key]} updateCard={updateCard} />
      ))}
    </ul>
  </Section>
);

export default Preview;

const Section = styled.section`
  min-height: 400px;
  flex-basis: 60%;
  padding: 1.5em 3em;
`;
