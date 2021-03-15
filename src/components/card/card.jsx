import './card.css';

import React from 'react';
import styled from 'styled-components';

const DEFAULT_IMAGE = '/image/default.jpg';

const Card = ({ card }) => {
  const { title, sub, theme, fileName, fileURL, fontColor } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <List url={url} className={`${getStyle(theme)}`}>
      <div>
        <Title fontColor={fontColor}>{title}</Title>
        <p>{sub}</p>
      </div>
    </List>
  );
};

function getStyle(theme) {
  switch (theme) {
    case 'border':
      return 'borderStyle';
    case 'border-red':
      return 'borderStyle-red';
    case null:
      return null;
    default:
      throw new Error(`unknown theme : ${theme}`);
  }
}

export default Card;

const List = styled.li`
  width: 320px;
  height: 180px;
  position: relative;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
`;
const Title = styled.h1`
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  color: ${(props) => props.fontColor};
`;
