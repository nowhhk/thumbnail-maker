import React, { useRef } from 'react';

import Button from '../button/button';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { title, sub, theme, fileName, fileURL, fontColor } = card;

  const formRef = useRef();
  const themeRef = useRef();
  const fontColorRef = useRef();
  const subRef = useRef();
  const titleRef = useRef();

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
    <form ref={formRef}>
      <input
        ref={titleRef}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <select ref={themeRef} name="theme" value={theme} onChange={onChange}>
        <option value="border">border</option>
        <option value="border-red">border-red</option>
      </select>
      <select
        ref={fontColorRef}
        name="fontColor"
        value={fontColor}
        onChange={onChange}
      >
        <option value="white">white</option>
        <option value="black">black</option>
      </select>
      <textarea
        ref={subRef}
        name="sub"
        value={sub}
        onChange={onChange}
      ></textarea>
      <Button name="Delete" onClick={onSubmit}></Button>
      <FileInput name={fileName} onFileChange={onFileChange} />
    </form>
  );
};

export default CardEditForm;
