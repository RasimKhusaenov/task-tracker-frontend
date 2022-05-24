import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  padding-bottom: 0.5em;
`;

const Input = styled.input`
  margin-left: 0.5em;
`;

export default function InputField(props) {
  const { fieldName, inputType, inputId, placeholder, onChange, onBlur, value } = props;
  return (
    <Label>
      {fieldName}:
      <Input
        value={value}
        type={inputType}
        name={fieldName}
        id={inputId}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Label>
  );
}
