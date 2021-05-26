import React from 'react';
import styled from 'styled-components';

const RadioButton = () => {
  return (
    <Wrapper>
      <InputRadio type="radio"/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const InputRadio = styled.input`
  margin-right: 8px;
`

export default RadioButton;