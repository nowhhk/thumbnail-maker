import React, { useRef } from 'react';

import Button from '../button/button';
import styled from 'styled-components';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const {
    title,
    sub,
    theme,
    fileName,
    fileURL,
    fontColor,
    fontStyle,
    width,
    height,
    fontSize,
  } = card;

  const formRef = useRef();
  const themeRef = useRef();
  const fontColorRef = useRef();
  const subRef = useRef();
  const titleRef = useRef();
  const fontStyleRef = useRef();
  const widthRef = useRef();
  const heightRef = useRef();
  const fontSizeRef = useRef();

  const onSubmit = () => {
    deleteCard(card);
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <CardForm ref={formRef}>
      <div>
        <label>타이틀</label>
        <input
          ref={titleRef}
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />
      </div>
      <div>
        <label>글씨체</label>
        <select
          ref={fontStyleRef}
          name="fontStyle"
          value={fontStyle}
          onChange={onChange}
        >
          <option value="white">저쩌구</option>
          <option value="black">어쩌구</option>
        </select>
      </div>
      <div>
        <label>폰트색</label>
        <select
          ref={fontColorRef}
          name="fontColor"
          value={fontColor}
          onChange={onChange}
        >
          <option value="white">white</option>
          <option value="black">black</option>
        </select>
      </div>
      <div>
        <label>사이즈</label>
        <select
          ref={fontSizeRef}
          name="fontSize"
          value={fontSize}
          onChange={onChange}
        >
          <option value="white">10</option>
          <option value="black">20</option>
        </select>
      </div>

      <div>
        <label>테마</label>
        <select ref={themeRef} name="theme" value={theme} onChange={onChange}>
          <option value="border">border</option>
          <option value="border-red">border-red</option>
        </select>
      </div>

      {/* <label>타이틀</label>
      <textarea
        ref={subRef}
        name="sub"
        value={sub}
        onChange={onChange}
      ></textarea> */}
      <FileInput name={fileName} onFileChange={onFileChange} />
      <Button name="Delete" onClick={onSubmit}></Button>
    </CardForm>
  );
};

export default CardEditForm;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;

  div {
    margin: 0.5em 0;
  }

  input,
  select,
  textarea {
    border: none;
    background: none;
    width: 20em;
  }

  input {
    border-bottom: solid 1px black;
    padding-bottom: 0.4em;
  }
`;
