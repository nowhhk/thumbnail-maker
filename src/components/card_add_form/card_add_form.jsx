import React, { useRef } from 'react';

import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const themeRef = useRef();
  const fontColorRef = useRef();
  const subRef = useRef();
  const titleRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      theme: themeRef.current.value,
      sub: subRef.current.value || '',
      title: titleRef.current.value || '',
      fontColor: fontColorRef.current.value,
      fileName: '',
      fileURL: '',
    };
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef}>
      <input ref={titleRef} type="text" name="title" placeholder="title" />
      <select ref={themeRef} name="theme">
        <option value="border">border</option>
        <option value="border-red">border-red</option>
      </select>
      <select ref={fontColorRef} name="fontColor">
        <option value="white">white</option>
        <option value="black">black</option>
      </select>
      <textarea ref={subRef} name="sub" placeholder="Sub"></textarea>
      <Button name="Add" onClick={onSubmit}></Button>
      <ImageFileInput></ImageFileInput>
    </form>
  );
};

export default CardAddForm;
