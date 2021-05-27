import React from 'react';
import styled from 'styled-components';
import SearchBar from "../components/SearchBar"
import Checkbox from "../components/Checkbox"
import RadioButton from "../components/RadioButton"
import LabelText from "../components/LabelText"

const Sidebar = () => {
  const [checked, setChecked] = React.useState(false)
  
  return (
    <Wrapper>
      <div>
        {/* <Label>
          <Checkbox 
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
          <span style={{ marginLeft: 8 }}>Label Text</span>
        </Label> */}
      </div>
      {/* <StyledLabelText text="Location" />
      <SearchBar
        icon="globe"
        placeholder="City, state, zip code or country"
        width="370"
      /> */}
      <div>
        <RadioButton 
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
          text="Label"
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`
const Label = styled.label`

`

const StyledLabelText = styled(LabelText)`
  margin-bottom: 14px;
`

export default Sidebar