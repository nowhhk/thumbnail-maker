import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import React from 'react';

const CardEditForm = ({ card }) => {
  const { title, sub, theme, fileName, fileURL, fontColor } = card;

  const onSubmit = () => {};

  return (
    <form>
      <input type="text" name="title" value={title} />
      <select name="theme" value={theme}>
        <option value="border">border</option>
        <option value="border-red">border-red</option>
      </select>
      <select name="fontColor" value={fontColor}>
        <option value="white">white</option>
        <option value="black">black</option>
      </select>
      <textarea name="sub" value={sub}></textarea>
      <Button name="Delete" onClick={onSubmit}></Button>
      <ImageFileInput></ImageFileInput>
    </form>
  );
};

export default CardEditForm;
