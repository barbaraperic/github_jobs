import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import Logo from "../components/Logo"

const Wrapper = styled.div`
  height: 138px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1541953445540-3e450e21a945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80");
`

const StyledButton = styled(Button)`
  position: absolute;
  right: 4px;

  @media (max-width: 920px) {
    width: 67px;
   } 

  @media (max-width: 758px) {
     width: 67px;
  }
`

const Banner = () => {
  return (
    <>
      <Logo />
      <Wrapper>
        <SearchBar
          icon="briefcase"
          placeholder="Title, companies, expertise or benefits"
        >
          <StyledButton variant="fill">Search</StyledButton>
        </SearchBar>
      </Wrapper>
    </>
  )
}

export default Banner