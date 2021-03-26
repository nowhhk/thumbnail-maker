import React, { useRef, useState } from 'react';

import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';
import styled from 'styled-components';

const DEFAULT_IMAGE = '/image/default.jpg';

const Card = ({ card, updateCard }) => {
  const {
    width,
    height,
    title,
    x,
    y,
    sub,
    theme,
    fileName,
    fileURL,
    fontColor,
    fontSize,
    fontStyle,
  } = card;
  const url = fileURL || DEFAULT_IMAGE;
  const captureRef = useRef();

  const onDownload = (e) => {
    e.preventDefault();
    html2canvas(captureRef.current, {
      // ref로 DOM선택시 3rd-party library를 사용해야하는 경우에는 해당 element의 id를 전달해야하는 경우 current 속성을 이용
      // 외부이미지사용시 CORS옵션설정
      useCORS: true,
      proxy: 'html2canvasproxy.php',
      logging: true,
      scrollX: 0,
      scrollY: -window.scrollY,
      position: 'fixed',
    }).then(function (canvas) {
      const myImage = canvas.toDataURL();
      downloadImage(myImage, '다운로드.png');
    });
  };

  function downloadImage(uri, name) {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
  }

  const onStop = (e: MouseEvent, data: Object) => {
    updateCard({
      ...card,
      x: data.x,
      y: data.y,
    });
  };

  return (
    <Container height={height}>
      <List
        ref={captureRef}
        url={url}
        className={`${getStyle(theme)}`}
        width={width}
        height={height}
      >
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: x, y: y }}
          scale={1}
          onStop={onStop}
        >
          <Title
            className="handle"
            fontColor={fontColor}
            fontSize={fontSize || '30px'}
            fontStyle={fontStyle}
            x={x}
            y={y}
          >
            {title}
          </Title>
        </Draggable>
      </List>
      <PNGDown onClick={onDownload}>
        <i class="fas fa-file-download"></i> Download
      </PNGDown>
    </Container>
  );
};

function getStyle(theme) {
  switch (theme) {
    case 'border':
      return 'borderStyle';
    case 'border-red':
      return 'borderStyle red';
    case 'card':
      return 'card';
    case 'opacity':
      return 'opacity';
    case null:
      return null;
    default:
      console.log();
  }
}

export default Card;

const Container = styled.div`
  height: ${(props) => props.height}px;
  min-height: 300px;
  margin-bottom: 2em;
`;

const List = styled.li`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;

  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;

  &.borderStyle {
    border: 5px solid black;
  }
  &.red {
    border-color: white;
  }
  &.card {
    background-size: 280px 320px;
    background-position: 20px;
    background-color: white;
  }
  &.opacity {
    background: white;
  }
  &.opacity::before {
    content: '';
    background: url(${(props) => props.url});
    background-size: cover;
    opacity: 0.4;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;
const Title = styled.h1`
  position: absolute;
  /* top: ${(props) => props.y}; */
  /* left: ${(props) => props.x}; */
  word-wrap: normal;
  word-break: break-word;
  width: 90%;
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontStyle};
  cursor: move;
`;

const PNGDown = styled.div`
  color: ${(props) => props.theme.color.makerGreen};
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 0.5em;
  cursor: pointer;
`;
