import React, { useRef, useState } from 'react';

import Button from '../button/button';
import { CompactPicker } from 'react-color';
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

  const [openPicker, setOpenPicker] = useState(false);

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
  const handleChangeComplete = (color) => {
    updateCard({
      ...card,
      fontColor: color.hex,
    });
    setOpenPicker(false);
  };

  const handlePicker = () => {
    setOpenPicker(!openPicker);
  };

  return (
    <CardForm ref={formRef} height={height}>
      <Label>
        <input
          className={'size'}
          ref={widthRef}
          type="text"
          name="width"
          value={width}
          onChange={onChange}
        />
        x
        <input
          className={'size'}
          ref={heightRef}
          type="text"
          name="height"
          value={height}
          onChange={onChange}
        />
      </Label>
      <Label>
        <input
          className={'title'}
          ref={titleRef}
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />
      </Label>
      <div className={'font'}>
        <Label>
          <select
            ref={fontStyleRef}
            name="fontStyle"
            value={fontStyle}
            onChange={onChange}
            className={'select'}
          >
            <option value="Nanum Myeongjo">Nanum Myeongjo</option>
            <option value="Black Han Sans">Black Han Sans</option>
            <option value="Nanum Pen Script">Nanum Pen Script</option>
          </select>
        </Label>
        <Label>
          <Pallete
            className={'select'}
            fontColor={fontColor}
            onClick={handlePicker}
          >
            <i className="fas fa-brush"></i>
          </Pallete>
          {openPicker && (
            <Picker>
              <CompactPicker
                color={fontColor}
                onChangeComplete={handleChangeComplete}
              />
            </Picker>
          )}
        </Label>
        <Label>
          <select
            className={'select'}
            ref={fontSizeRef}
            name="fontSize"
            value={fontSize}
            onChange={onChange}
          >
            <option value="30px">30</option>
            <option value="40px">40</option>
            <option value="50px">50</option>
            <option value="60px">60</option>
            <option value="70px">70</option>
          </select>
        </Label>
      </div>

      <Label>
        <select
          className={'select'}
          ref={themeRef}
          name="theme"
          value={theme}
          onChange={onChange}
        >
          <option value="border">border</option>
          <option value="border-red">border-red</option>
          <option value="card">card</option>
          <option value="opacity">opacity</option>
        </select>
      </Label>

      {/* <label>타이틀</label>
      <textarea
        ref={subRef}
        name="sub"
        value={sub}
        onChange={onChange}
      ></textarea> */}
      <div className={'buttons'}>
        <FileInput
          name={fileName}
          onFileChange={onFileChange}
          className={'button'}
        />
        <Button name="Delete" onClick={onSubmit} className={'button'}></Button>
      </div>
    </CardForm>
  );
};

export default CardEditForm;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: calc(300px);
  height: ${(props) => props.height}px;
  margin-bottom: 2em;
  border-bottom: 2px dashed white;

  input,
  select,
  textarea {
    border: none;
    background: none;
    height: 40px;
    text-align: center;
  }

  .select {
    background-color: white;
    border-radius: 4px;
    /* border: 2px dashed ${(props) => props.theme.color.makerGreen}; */
    padding: 0 1em;
    margin-right: 0.5em;
  }

  .size {
    width: 5em;
    border-radius: 4px;
    text-align: center;
    background-color: white;
    &:not(:last-child) {
      margin-right: 0.5em;
    }
  }
  .title {
    border-bottom: solid 2px ${(props) => props.theme.color.makerGreen};
    width: 20em;
  }
  .font {
    display: flex;
  }

  .buttons {
    display: flex;
    margin-top: 1em;
  }
  .button {
    padding: 2em;
  }
`;
const Label = styled.div`
  margin: 0.5em 0;
`;

const Pallete = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  /* border-radius: 4px; */
  cursor: pointer;
  background-color: white;
  color: ${(props) => props.fontColor};
  text-shadow: 1px 1px 5px lightgrey;
`;

const Picker = styled.div`
  position: absolute;
  margin-top: 0.3em;
  z-index: 2;
`;
