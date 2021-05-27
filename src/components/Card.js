import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DefaultImage from "./DefaultImage";
import Icon from "./Icon";
import { blue } from "../utils"

const Wrapper = styled.div`
  width: 600px;
  display: flex;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 32px;
  background-color: white;
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

const Button = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #334680;
  padding: 6px;
  width: 63px;
  margin-top: 12px;
  font-size: 12px;
  color: ${blue[100]};
`

const MutedTextWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

const MutedText = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 27px;
  }
`

const IconWrapper = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  margin-right: 8px;
`

export const Card = ({ imageSrc, label, title, type, location, time }) => {
  return (
    <Wrapper>
      { imageSrc 
        ? <Image src={imageSrc} alt="logo"/>
        : <DefaultImage />
      }
      <Content>
        <Label>{label}</Label>
        <Title>{title}</Title>
        { type ? <Button>{type}</Button> : null }
      </Content>
      <MutedTextWrapper>
        <MutedText>
          <IconWrapper>
            <Icon id="globe" />
          </IconWrapper>
          <small>{location}</small>
        </MutedText>
        <MutedText>
          <IconWrapper>
            <Icon id="clock" />
          </IconWrapper>
          <small>{time}</small>
        </MutedText>
      </MutedTextWrapper>
    </Wrapper>
  )
}

Card.propTypes = {
  imageSrc: PropTypes.string,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default Card