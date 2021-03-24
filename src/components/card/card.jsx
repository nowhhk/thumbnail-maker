import './card.css';

import Draggable, { DraggableCore } from 'react-draggable';
import React, { useRef } from 'react';

import Button from '../button/button';
import html2canvas from 'html2canvas';
import styled from 'styled-components';

const DEFAULT_IMAGE = '/image/default.jpg';

const Card = ({ card }) => {
  const {
    title,
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

  const eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  return (
    <>
      <List ref={captureRef} url={url} className={`${getStyle(theme)}`}>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          scale={1}
        >
          <Title
            className="handle"
            fontColor={fontColor}
            fontSize={fontSize || '30px'}
            fontStyle={fontStyle}
          >
            {title}
          </Title>
        </Draggable>
      </List>
      <Button name="다운로드" onClick={onDownload}></Button>
    </>
  );
};

function getStyle(theme) {
  switch (theme) {
    case 'border':
      return 'borderStyle';
    case 'border-red':
      return 'borderStyle red';
    case null:
      return null;
    default:
      throw new Error(`unknown theme : ${theme}`);
  }
}

export default Card;

const List = styled.li`
  width: 640px;
  height: 360px;
  position: relative;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
`;
const Title = styled.div`
  position: absolute;
  top: 180px;
  left: 20px;
  word-wrap: normal;
  word-break: break-word;
  width: 90%;
  z-index: 0;
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontStyle};
  cursor: move;
`;
