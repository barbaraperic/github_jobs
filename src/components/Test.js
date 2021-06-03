import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar'
import Button from './Button'

const StyledSearchBar = styled(SearchBar)`
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`

const StyledButton = styled(Button)`
  position: absolute;
  right: 4px;

  @media only screen and (max-width: 768px) {
    width: 67px;
  }
`

const Test = () => {
  return (
    <>
      <StyledSearchBar placeholder="company" icon="clock" >
        <StyledButton variant="fill">Search</StyledButton>
      </StyledSearchBar>
    </>
  )
}

export default Test
