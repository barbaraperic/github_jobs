import React from 'react';
import Checkbox from "./Checkbox"

const Test = () => {
  const [checked, setChecked] = React.useState(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <label>
      <Checkbox 
        checked={checked}
        onClick={handleCheck}
      />
      <span>Label text</span>
    </label>
  )
}

export default Test