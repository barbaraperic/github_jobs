import React from 'react';
import styled from 'styled-components';
import { Briefcase, Clock, Globe } from 'react-feather';

const icons = {
  briefcase: Briefcase,
  clock: Clock,
  globe: Globe
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`
const Text = styled.small`
  margin-left: 8px;
`

const IconWrapper = styled.div`
  width: 15px;
  height: 15px;
`

const Icon = ({ className, id, text }) => {
  const Component = icons[id]
  return (
    <Wrapper className={className}>
      <IconWrapper>
        <Component color="#B7BCCE" size="16" />
      </IconWrapper>
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default Icon
