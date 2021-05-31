import React, { useState } from 'react';
import styled from 'styled-components';
import { neutral, blue } from "../utils"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [pageNumberLimit, setPageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      {/* <PageNumberWrapper>
        <span>&lt;</span>
      </PageNumberWrapper> */}
      {pageNumbers.map(number => (
        (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) 
        ?
          <PageNumberWrapper onClick={() => paginate(number)} key={number}>
            <span>{number}</span>
          </PageNumberWrapper>

        : null
      ))}
      {/* <PageNumberWrapper>
        <span>&gt;</span>
      </PageNumberWrapper> */}
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

  &:hover {
    border: 1px solid ${blue[200]};
    color: ${blue[200]};
    cursor: pointer;
  }

  &:focus {
    background-color: ${blue[200]};
    color: white;
  }

`

const PageSpreadWrapper = styled.div`
  color: ${neutral[200]};
  display: inline-block;
  margin: 8px;
`

export default Pagination;