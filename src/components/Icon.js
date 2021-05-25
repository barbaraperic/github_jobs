import React from 'react';
import styled from 'styled-components';
import { briefcase } from 'react-feather';

const icons = {
  briefcase: briefcase
}

const Icon = ({ id }) => {
  const Component = icons[id]
  return (
    <Wrapper>
      <Component />
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

export default Icon;

