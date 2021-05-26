import React from 'react';
import styled from 'styled-components';
import { Briefcase, Clock, Globe } from 'react-feather';

const icons = {
  briefcase: Briefcase,
  clock: Clock,
  globe: Globe
}

export const Icon = ({ id, size }) => {
  const Component = icons[id]
  return (
    <Wrapper>
      <Component color="#B7BCCE" size={size}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  fill: #B7BCCE;
`
