import React from 'react';
import styled from 'styled-components';
import { blue } from "../utils";

const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #bebebe;
`;
const InputRadio = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  margin-right: 12px;
  &:hover ~ ${RadioButtonLabel} {
    border: 1px solid ${blue[200]};
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      border: 1px solid ${blue[200]};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 2px;
        background: ${blue[200]};
      }
    }
 `}
`;

const RadioButton = ({ className, checked, text, ...props }) => {
  return (
    <Item className={className}>
      <InputRadio type="radio" checked={checked} {...props}/>
      <RadioButtonLabel />
      <p>{text}</p>
    </Item>
  )
}

export default RadioButton


