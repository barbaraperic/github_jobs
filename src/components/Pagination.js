import React, { useState } from 'react';
import styled from 'styled-components';
import { neutral, blue } from "../utils"

const Pagination = (props) => {
  const { 
    postsPerPage, 
    totalPosts, 
    paginate,
    maxPageNumberLimit,
    minPageNumberLimit,
    handleNextPage, 
    handlePrevPage 
  } = props
  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      <PageSpreadWrapper onClick={handlePrevPage}>
        <span>&lt;</span>
      </PageSpreadWrapper>
      {pageNumbers.map(number => (
        (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) 
        ?
          <PageNumberWrapper onClick={() => paginate(number)} key={number}>
            <span>{number}</span>
          </PageNumberWrapper>

        : null
      ))}
      <PageSpreadWrapper onClick={handleNextPage}>
        <span>&gt;</span>
      </PageSpreadWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: right;
`

const PageNumberWrapper = styled.button`
  border: 1px solid ${neutral[200]};
  background-color: transparent;
  color: ${neutral[200]};
  display: inline-block;
  padding: 11px;
  margin: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${blue[200]};
    color: ${blue[200]};
  }

  &:focus {
    background-color: ${blue[200]};
    color: white;
  }

  &:active {
    background-color: ${blue[200]};
    color: white;
  }

`

const PageSpreadWrapper = styled.div`
  color: ${neutral[200]};
  display: inline-block;
  margin: 8px;
  cursor: pointer;
`

export default Pagination;