import React from 'react';
import styled from 'styled-components';
import LinkBack from "../components/LinkBack"
import LabelText from "../components/LabelText"

const StyledLabelText = styled(LabelText)`
  margin-top: 36px;
`

const SidebarInstructions = () => {
  return (
    <>
      <LinkBack />
      <StyledLabelText text="How to apply"/>
    </>
  )
}

export default SidebarInstructions