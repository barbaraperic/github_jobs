import React from 'react';
import styled from 'styled-components';
import { neutral, blue } from "../utils"

const Pagination = () => {
  return (
    <Wrapper>
      <PageNumberWrapper>
        <span>&lt;</span>
      </PageNumberWrapper>
      <PageNumberWrapper>
        <span>1</span>
      </PageNumberWrapper>
      <PageNumberWrapper>
        <span>2</span>
      </PageNumberWrapper>
      <PageNumberWrapper>
        <span>3</span>
      </PageNumberWrapper>
      <PageSpreadWrapper>
        <span>...</span>
      </PageSpreadWrapper>
      <PageNumberWrapper>
        <span>10</span>
      </PageNumberWrapper>
      <PageNumberWrapper>
        <span>&gt;</span>
      </PageNumberWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

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

`

const PageSpreadWrapper = styled.div`
  color: ${neutral[200]};
  display: inline-block;
  margin: 8px;
`

export default Pagination;