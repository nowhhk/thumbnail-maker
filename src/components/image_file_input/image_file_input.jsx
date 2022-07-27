import React, { useRef, useState } from 'react';

import styled from 'styled-components';

const ImageFileInput = ({ uploadService, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    // console.log(event.target.files[0]);
    setLoading(true);
    const uploaded = await uploadService.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <FormInput>
      <Label>이미지 선택</Label>
      <Input
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />

      {!loading && (
        <UploadBtn onClick={onButtonClick}>{name || '선택하기'}</UploadBtn>
      )}
      {loading && <Loading></Loading>}
    </FormInput>
  );
};

export default ImageFileInput;

const UploadBtn = styled.button`
  background-color: ${({ theme }) => theme.color.makerBeige};
  color: ${({ theme }) => theme.color.makerBlack};
  font-weight: bold;
  cursor: pointer;
  padding: 0.8em 1.6em;
  max-width: 7em;
  font-size: 0.8rem;
  margin-right: 0.5em;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.makerWhite};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover {
    opacity: 0.8;
  }
`;
const Label = styled.div`
  font-size: 0.8rem;
  width: 5rem;
`;
const FormInput = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
`;
const Input = styled.input`
  display: none;
`;
const Name = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.makerGrey};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.makerWhite};
`;

const Loading = styled.div`
  width: 1.5em;
  height: 1.5em;
  margin-right: 1em;
  margin-top: 0.5em;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.color.makerLightGrey};
  border-top: 3px solid ${({ theme }) => theme.color.makeGreen};
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
