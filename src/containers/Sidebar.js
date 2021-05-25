import React from 'react';
import styled from 'styled-components';
import Checkbox from '../components/Checkbox';

const Sidebar = () => {
  const [checked, setChecked] = React.useState(false)
  
  return (
    <Wrapper>
      <Label>
        <Checkbox 
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
        <span style={{ marginLeft: 8 }}>Label Text</span>
      </Label>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

const Label = styled.label`

`

export default Sidebar