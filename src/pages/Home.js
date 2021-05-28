import React from 'react';
import styled from 'styled-components';
import Banner from "../containers/Banner";
import Sidebar from "../containers/Sidebar"
import Cards from "../containers/Cards"

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

const Wrapper = styled.main`
  display: flex;
`

const StyledSidebar = styled(Sidebar)`
  min-width: 400px;
  flex: 1;
  /* flex-shrink: 99999999; */
`

const StyledCards = styled(Cards)`
`

export default Home
