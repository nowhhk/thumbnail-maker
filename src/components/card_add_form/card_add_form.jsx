import React, { useRef, useState } from 'react';

import Button from '../button/button';
import { CompactPicker } from 'react-color';
import styled from 'styled-components';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const themeRef = useRef();
  const fontColorRef = useRef();
  const fontStyleRef = useRef();
  const subRef = useRef();
  const fontSizeRef = useRef();
  const titleRef = useRef();
  const widthRef = useRef();
  const heightRef = useRef();

  const [file, setFile] = useState({
    fileName: null,
    fileURL: null,
  });

  const onFileChange = (file) => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      x: 0,
      y: 0,
      width: widthRef.current.value,
      height: heightRef.current.value,
      theme: themeRef.current.value,
      // sub: subRef.current.value || '',
      title: titleRef.current.value || '',
      fontColor: fontColor,
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };
  const [openPicker, setOpenPicker] = useState(false);
  const handlePicker = () => {
    setOpenPicker(!openPicker);
  };

  const [fontColor, setFontColor] = useState('#000');

  const handleChangeComplete = (color) => {
    setFontColor(color.hex);
    setOpenPicker(false);
  };

  return (
    <CardForm ref={formRef}>
      <Label>
        <input
          className={'size'}
          ref={widthRef}
          type="text"
          name="width"
          defaultValue="640"
        />
        x
        <input
          className={'size'}
          ref={heightRef}
          type="text"
          name="height"
          defaultValue="360"
        />
      </Label>
      <Label>
        <input
          className={'title'}
          ref={titleRef}
          type="text"
          name="title"
          placeholder="Type the title"
        />
      </Label>
      <div className={'font'}>
        <Label>
          <select name="fontStyle" ref={fontStyleRef} className={'select'}>
            <option value="Nanum Myeongjo">Nanum Myeongjo</option>
            <option value="Black Han Sans">Black Han Sans</option>
            <option value="Nanum Pen Script">Nanum Pen Script</option>
          </select>
        </Label>
        {/* <select ref={fontColorRef} name="fontColor">
          <option value="white">white</option>
          <option value="black">black</option>
        </select> */}
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
          <select className={'select'} name="fontSize" ref={fontSizeRef}>
            <option value="30px">30</option>
            <option value="40px">40</option>
            <option value="50px">50</option>
            <option value="60px">60</option>
            <option value="70px">70</option>
          </select>
        </Label>
      </div>

      <Label>
        <select className={'select'} ref={themeRef} name="theme">
          <option value="border">border</option>
          <option value="border-red">border-red</option>
          <option value="card">card</option>
          <option value="opacity">opacity</option>
        </select>
      </Label>

      <div className={'buttons'}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
        <Button name="Add" onClick={onSubmit}></Button>
      </div>
    </CardForm>
  );
};

export default CardAddForm;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 360px;
  margin-bottom: 2em;

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
