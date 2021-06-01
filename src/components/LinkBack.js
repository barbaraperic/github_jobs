
import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { blue } from '../utils'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const ArrowBack = styled(Link)`
  color: ${blue[200]};
  font-size: 18px;
  margin-right: 15px; 
  text-decoration: none;
`

const Title = styled.p`
  font-size: 14px;
  color: ${blue[200]};
` 

const LinkBack = () => {
  return (
    <Wrapper>
      <ArrowBack to="/">&larr;</ArrowBack>
      <Title>Back to search</Title>
    </Wrapper>
  )
}

export default LinkBack