import React from 'react';
import styled from 'styled-components';
import { neutral } from "../utils";

const LabelText = ({ className, text }) => {
  return (
    <Title className={className}>{text}</Title>
  )
}

const Title = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  color: ${neutral[100]};
  letter-spacing: 1px;
  font-family: Poppins;
`

export default LabelText;