import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar'

const Banner = () => {
  return (
    <>
    <Title><strong>GitHub</strong> jobs</Title>
    <Wrapper>
      <SearchBar />
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  height: 138px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 42px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1541953445540-3e450e21a945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80")
`

const Title = styled.h1`
  margin-top: 32px;
`

export default Banner