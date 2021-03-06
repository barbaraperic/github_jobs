import React from 'react';
import styled from 'styled-components';
import { blue } from "../utils"

const OutlineButton = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #334680;
  padding: 6px;
  width: 63px;
  font-size: 12px;
  color: ${blue[100]};
`

const FilledButton = styled.button`
  width: 160px;
  height: 47px;
  border-radius: 4px;
  background-color: ${blue[200]};
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: .4s;

  &:hover {
    background-color: #1363c1;
  }
`

const Button = ({ className, variant, children }) => {
  
  let Component;
  if (variant === 'fill') {
    Component = FilledButton
  } else if (variant === 'outline') {
    Component = OutlineButton
  } else {
    Component = OutlineButton
  }
  return (
    <Component className={className}>
      {children}
    </Component>
  )
}

export default Button