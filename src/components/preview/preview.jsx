import Card from '../card/card';
import React from 'react';
import styled from 'styled-components';

const Preview = ({ cards }) => (
  <Section>
    <ul>
      {Object.keys(cards).map((key) => (
        <Card key={key} card={cards[key]} />
      ))}
    </ul>
  </Section>
);

export default Preview;

const Section = styled.section`
  flex-basis: 60%;
  padding: 1.5em 3em;
`;
