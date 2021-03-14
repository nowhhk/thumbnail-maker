import Card from '../card/card';
import React from 'react';
import styled from 'styled-components';

const Preview = ({ cards }) => (
  <Section>
    <Title>Preview</Title>
    <ul>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </ul>
  </Section>
);

export default Preview;

const Section = styled.section`
  flex-basis: 50%;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color.makerGreen};
`;
