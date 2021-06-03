import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar'
import Button from './Button'

const StyledSearchBar = styled(SearchBar)`
  position: relative;
`

const StyledButton = styled(Button)`
  position: absolute;
  right: 4px;
`

const Test = () => {
  return (
    <>
      <StyledSearchBar placeholder="company" icon="clock" width="315">
        <StyledButton size="medium" variant="fill">Search</StyledButton>
      </StyledSearchBar>
    </>
  )
}

export default Test
