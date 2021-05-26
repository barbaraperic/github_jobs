import React from 'react';
import styled from 'styled-components';
import { neutral } from "../utils"

const Wrapper = styled.div`
  width: 90px;
  height: 90px;
  background-color: ${neutral[300]};
  color: ${neutral[500]};
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DefaultImage = () => {
  return (
    <Wrapper>
      <p>not found</p>
    </Wrapper>
  )
}

export default DefaultImage
