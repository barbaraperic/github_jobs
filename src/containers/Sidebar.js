import React from 'react';
import styled from 'styled-components';
import SearchBar from "../components/SearchBar"
import Checkbox from "../components/Checkbox"

const Sidebar = () => {
  const [checked, setChecked] = React.useState(false)
  
  return (
    <Wrapper>

      <SearchBar
        icon="globe"
        placeholder="City, state, zip code or country"
        width="370"
      />
      <div>
          <Label>
            <Checkbox 
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            />
            <span style={{ marginLeft: 8 }}>Label Text</span>
          </Label>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

const Label = styled.label`

`

export default Sidebar