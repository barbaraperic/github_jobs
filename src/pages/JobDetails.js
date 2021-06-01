import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import SidebarInstructions from '../containers/SidebarInstructions';
import Main from '../containers/Main';

const Wrapper = styled.div`
  display: flex;
`

const StyledMain = styled(Main)`
  flex-grow: 1;
`

const JobDetails = () => {
  return (
    <>
    <Logo />
    <Wrapper>
      <SidebarInstructions />
      <StyledMain />
    </Wrapper>
    </>
  )
}

export default JobDetails