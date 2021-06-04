import React, { useState } from 'react';
import styled from 'styled-components';
import { neutral, blue } from "../utils"

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ListItem = styled.li`

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

  &.active {
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

const Pagination = (props) => {
  const { 
    postsPerPage, 
    totalPosts, 
    paginate,
    maxPageNumberLimit,
    minPageNumberLimit,
    handleNextPage, 
    handlePrevPage,
    currentPage
  } = props
  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      <li>
        <PageSpreadWrapper onClick={handlePrevPage}>
          <span>&lt;</span>
        </PageSpreadWrapper>
      </li>
      {pageNumbers.map(number => (
        (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) 
        ?
        <ListItem key={number}>
          <PageNumberWrapper 
            onClick={() => paginate(number)} key={number}
            className={currentPage == number ? "active" : null}
          >
            <span>{number}</span>
          </PageNumberWrapper>
        </ListItem>

        : null
      ))}
      <li>
        <PageSpreadWrapper onClick={handleNextPage}>
          <span>&gt;</span>
        </PageSpreadWrapper>
      </li>
    </Wrapper>
  )
}

export default Pagination;