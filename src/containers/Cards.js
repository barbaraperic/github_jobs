import React from 'react';
import styled from 'styled-components';
import Card from "../components"

const Cards = () => {
  return (
    <Wrapper>
      <Card 
        imageSrc="https://source.unsplash.com/random"
        label="Sesame"
        title="Senior Engineer"
        type="Full time"
        location="London"
        time="5 days ago"
      />
      <Card 
        imageSrc="https://source.unsplash.com/random"
        label="Sesame"
        title="Senior Engineer"
        type="Full time"
        location="London"
        time="5 days ago"
      />
      <Card 
        imageSrc="https://source.unsplash.com/random"
        label="Sesame"
        title="Senior Engineer"
        type="Full time"
        location="London"
        time="5 days ago"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`

export default Cards