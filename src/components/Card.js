import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <Wrapper>
     <Image src="https://source.unsplash.com/random"/>
     <Content>
     <Label>kaisto</Label>
     <Title>Senior Engineer</Title>
     <Button>Hey</Button>
        {/* <ContentBottom>
        </ContentBottom> */}
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 800px;
  /* height: 114px; */
  display: flex;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  padding: 12px;
  border-radius: 4px;
`

const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 4px;
  object-fit: cover;
  margin-right: 16px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Label = styled.p`
  font-size: 12px;
`

const Title = styled.h2`
  font-size: 18px;
  margin-top: 8px;
`

const ContentBottom = styled.div`
  display: flex;
`

const Button = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #334680;
  padding: 6px;
  width: 63px;
  margin-top: 12px;
  font-size: 12px;
`

export default Card;