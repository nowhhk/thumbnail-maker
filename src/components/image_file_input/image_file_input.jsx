import React, { useRef } from 'react';

import styled from 'styled-components';

const ImageFileInput = ({ uploadService, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    console.log(event.target.files[0]);
    const uploaded = await uploadService.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div>
      <Input
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <UploadBtn onClick={onButtonClick}>{name || 'No file'}</UploadBtn>
    </div>
  );
};

export default ImageFileInput;

const UploadBtn = styled.button``;

const Input = styled.input`
  display: none;
`;
