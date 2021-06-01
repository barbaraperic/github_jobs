import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button'
import Icon from '../components/Icon';

const MainWrapper = styled.main`

`

const Header = styled.header`
  display: flex;
  align-items: center;
`

const Title = styled.h2`
  margin-right: 17px;
`

const Main = ({ className }) => {
  return (
    <MainWrapper className={className}>
      <Header>
        <Title>Front-End Software Engineer</Title>
        <Button variant="outline">Full Time</Button>
      </Header>
      <Icon id="clock" text="5 days ago"/>
    </MainWrapper>
  )
}

export default Main