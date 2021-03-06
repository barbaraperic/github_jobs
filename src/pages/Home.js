import React from 'react';
import styled from 'styled-components';
import Banner from "../containers/Banner";
import Sidebar from "../containers/Sidebar"
import Cards from "../containers/Cards"

const Wrapper = styled.main`
  display: flex;

  @media (max-width: 920px) {
    display: block;
   } 
`

const StyledSidebar = styled(Sidebar)`
  min-width: 400px;
  flex: 1;
`

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Wrapper>
        <StyledSidebar />
        <Cards />
      </Wrapper>
    </React.Fragment>
  )
}

export default Home
