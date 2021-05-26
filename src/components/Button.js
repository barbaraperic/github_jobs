import React from 'react';
import styled from 'styled-components';
import { blue } from "../utils"

const Wrapper = styled.button`
  width: 146px;
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

const Button = ({ className, children }) => {
  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  )
}

export default Button