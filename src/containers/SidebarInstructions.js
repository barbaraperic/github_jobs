import React from 'react';
import styled from 'styled-components';
import LinkBack from "../components/LinkBack"
import LabelText from "../components/LabelText"
import { blue } from '../utils'

const Wrapper = styled.div`
  max-width: 265px;
  padding-right: 45px;
`

const StyledLabelText = styled(LabelText)`
  margin-top: 36px;
  margin-bottom: 16px;
`

const Text = styled.p`
  font-size: 14px;
  line-height: 1.5;
`

const Email = styled.span`
  color: ${blue[200]}
`

const SidebarInstructions = () => {
  return (
    <Wrapper>
      <LinkBack />
      <StyledLabelText text="How to apply"/>
      <Text>Please email a copy of your resume and online portfolio to <Email>wes@kasisto.com</Email></Text>
    </Wrapper>
  )
}

export default SidebarInstructions