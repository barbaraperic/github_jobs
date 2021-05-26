import React from 'react';
import styled from 'styled-components';
import Icon from "./Icon";
import { neutral } from "../utils"

const Wrapper = styled.label`
  width: 700px;
  position: relative;
  display: flex;
  align-items: center;
`

const TextInput = styled.input`
  width: 100%;
  height: 55px;
  border-radius: 4px;
  padding-left: 42px;
  border: none;

  &::placeholder {
    font-size: 12px;
    color: ${neutral[200]}
  }
`

const IconWrapper = styled.div`
  position: absolute;
  margin: auto 0;
  top: 0;
  bottom: 0;
  left: 18px;
  width: 15px;
  height: 15px;
`

const SearchBar = ({ placeholder, icon, children }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon id={icon} />
      </IconWrapper>
      <TextInput placeholder={placeholder} />
      {children}
    </Wrapper>
  )
}



export default SearchBar