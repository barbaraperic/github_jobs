import React from 'react';
import Checkbox from "./Checkbox"
import RadioButton from "./RadioButton"

const Test = () => {
  const [checked, setChecked] = React.useState(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <label>
      <RadioButton />
      <span>Label text</span>
    </label>
  )
}

export default Test