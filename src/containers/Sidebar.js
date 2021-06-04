import React from 'react';
import styled from 'styled-components';
import SearchBar from "../components/SearchBar"
import Checkbox from "../components/Checkbox"
import RadioButton from "../components/RadioButton"
import LabelText from "../components/LabelText"

const Wrapper = styled.div``

const Label = styled.label`
  margin-left: 12px;
  margin-bottom: 33px;
  display: inline-block;
`

const StyledLabelText = styled(LabelText)`
  margin-bottom: 14px;
`

const StyledRadioButton = styled(RadioButton)`
  margin-bottom: 16px;
`

const StyledSearchBar = styled(SearchBar)`
  width: 370px;
`

const RadioButtonWrapper = styled.div`
  margin-top: 26px;
  margin-left: 12px;
`

const Sidebar = ({ className }) => {
  const [select, setSelect] = React.useState(null)
  const [checked, setChecked] = React.useState(false)
  
  const handleSelectChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setSelect(value);
  };
  
  return (
    <Wrapper className={className}>
      <Label>
        <Checkbox 
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
        <span style={{ marginLeft: 8 }}>Full Time</span>
      </Label>
      <StyledLabelText text="Location" />
      <StyledSearchBar
        icon="globe"
        placeholder="City, state, zip code or country"
      />
      <RadioButtonWrapper>
        <StyledRadioButton 
          checked={select === "london"}
          value="london"
          onChange={(event) => handleSelectChange(event)}
          text="London"
        />
        <StyledRadioButton 
          checked={select === "amsterdam"}
          value="amsterdam"
          onChange={(event) => handleSelectChange(event)}
          text="Amsterdam"
        />
        <StyledRadioButton 
          checked={select === "newyork"}
          value="newyork"
          onChange={(event) => handleSelectChange(event)}
          text="New York"
        />
        <StyledRadioButton 
          checked={select === "berlin"}
          value="berlin"
          onChange={(event) => handleSelectChange(event)}
          text="Berlin"
        />
      </RadioButtonWrapper>
    </Wrapper>
  )
}

export default Sidebar