import React from 'react';
import styled from 'styled-components';
import Button from "./Button"
import { Briefcase } from "../assets";
import { neutral } from "../utils"

const SearchBar = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Briefcase />
      </IconWrapper>
      <TextInput placeholder="Title, companies, expertise & benefits"/>
      <StyledButton>Search</StyledButton>
    </Wrapper>
  )
}

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

const StyledButton = styled(Button)`
  position: absolute;
  right: 4px;
`

export default SearchBar