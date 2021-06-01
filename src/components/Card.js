import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DefaultImage from "./DefaultImage";
import Button from './Button';
import Icon from "./Icon";
import { blue } from "../utils"

const Wrapper = styled.div`
  min-width: 500px;
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

const IconWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

const StyledIcon = styled(Icon)`
 &:not(:last-of-type) {
    margin-right: 27px;
  }
`

const StyledButton = styled(Button)`
  margin-top: 12px;
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
        { type ? <StyledButton variant='outline'>{type}</StyledButton> : null }
      </Content>
      <IconWrapper>
          <StyledIcon id="globe" text={location} />
          <StyledIcon id="clock" text={time} />
      </IconWrapper>
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