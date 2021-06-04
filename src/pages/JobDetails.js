import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import SidebarInstructions from '../containers/SidebarInstructions';
import Main from '../containers/Main';

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 920px) {
    display: block;
   } 
`

const StyledSidebarInstructions = styled(SidebarInstructions)`
  @media (max-width: 920px) {
    max-width: none;
   } 
`

const StyledMain = styled(Main)`
  flex-grow: 1;
  @media (max-width: 920px) {
    margin-top: 36px;
    
   } 
`

const JobDetails = () => {
  return (
    <>
    <Logo />
    <Wrapper>
      <StyledSidebarInstructions />
      <StyledMain />
    </Wrapper>
    </>
  )
}

export default JobDetails