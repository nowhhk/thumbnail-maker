import React, { useState } from 'react';

import Button from '../button/button';
import { CloseOutlined } from '@ant-design/icons';
import { CompactPicker } from 'react-color';
import styled from 'styled-components';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const {
    title,
    theme,
    fileName,
    fontColor,
    fontStyle,
    width,
    height,
    fontSize,
    backColor,
  } = card;

  const [openPicker, setOpenPicker] = useState(false);
  const [openBackPicker, setOpenBackPicker] = useState(false);

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

  const handleBackChangeComplete = (color) => {
    updateCard({
      ...card,
      backColor: color.hex,
    });
    setOpenBackPicker(false);
  };
  const handlePicker = () => {
    setOpenPicker(!openPicker);
  };
  const handleBackPicker = () => {
    setOpenBackPicker(!openBackPicker);
  };

  return (
    <CardForm height={height}>
      <Label>
        <input
          className="size"
          type="text"
          name="width"
          value={width}
          onChange={onChange}
        />
        <CloseOutlined style={{ fontSize: '0.7em', marginRight: '0.5em' }} />
        <input
          className="size"
          type="text"
          name="height"
          value={height}
          onChange={onChange}
        />
      </Label>
      <Label>
        <input
          className="title"
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />
      </Label>
      <div className="row">
        <Label>
          <select
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
            className="select"
            fontColor={fontColor}
            onClick={handlePicker}
            style={{ position: 'absolute' }}
          >
            <i className="fas fa-brush"></i>
          </Pallete>
          {openPicker && (
            <div style={{ position: 'relative' }}>
              <Picker>
                <CompactPicker
                  color={fontColor}
                  onChangeComplete={handleChangeComplete}
                />
              </Picker>
            </div>
          )}
        </Label>
        <Label>
          <select
            className="select"
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
      <div className="row">
        <Label>
          <select
            className="select"
            name="theme"
            value={theme}
            onChange={onChange}
          >
            <option value="none">No theme</option>
            <option value="border">black border</option>
            <option value="border-white">white border</option>
            <option value="card">card style</option>
            <option value="opacity">opacity image</option>
            <option value="color">color background</option>
          </select>
        </Label>
        <Label>
          <BackPallete
            className="select"
            backColor={backColor}
            onClick={handleBackPicker}
            style={{ position: 'absolute' }}
          >
            <i class="fas fa-fill-drip"></i>
          </BackPallete>
          {openBackPicker && (
            <div style={{ position: 'relative' }}>
              <Picker>
                <CompactPicker
                  color={backColor}
                  onChangeComplete={handleBackChangeComplete}
                />
              </Picker>
            </div>
          )}
        </Label>
      </div>

      <div className="buttons">
        <FileInput
          name={fileName}
          onFileChange={onFileChange}
          className="button"
        />
        <Button name="Delete" onClick={onSubmit} className="button"></Button>
      </div>
    </CardForm>
  );
};

export default CardEditForm;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
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
  .row {
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
  position: relative !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: white;
  color: ${(props) => props.fontColor};
  text-shadow: 1px 1px 5px lightgrey;
`;

const BackPallete = styled(Pallete)`
  color: ${(props) => props.backColor};
`;

const Picker = styled.div`
  position: absolute;
  margin-top: 0.3em;
  z-index: 2;
`;
