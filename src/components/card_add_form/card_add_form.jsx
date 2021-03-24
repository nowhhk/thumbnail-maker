import React, { useRef, useState } from 'react';

import Button from '../button/button';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const themeRef = useRef();
  const fontColorRef = useRef();
  const subRef = useRef();
  const titleRef = useRef();
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
      theme: themeRef.current.value,
      // sub: subRef.current.value || '',
      title: titleRef.current.value || '',
      fontColor: fontColorRef.current.value,
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
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
      <Button name="Add" onClick={onSubmit}></Button>
      <FileInput name={file.fileName} onFileChange={onFileChange} />
    </form>
  );
};

export default CardAddForm;
