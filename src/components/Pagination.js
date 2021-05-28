import React from 'react';
import styled from 'styled-components';
import { neutral } from "../utils"

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
      <PageNumberWrapper>
        <span>...</span>
      </PageNumberWrapper>
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

const PageNumberWrapper = styled.div`
  border: 1px solid ${neutral[200]};
  color: ${neutral[200]};
  display: inline-block;
  padding: 11px;
  margin: 12px;
  border-radius: 4px;
`

export default Pagination;