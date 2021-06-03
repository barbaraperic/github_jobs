import React from 'react';
import styled from 'styled-components';
import { blue } from "../utils"

const SIZES = {
  small: {
    width: 63 + 'px',
  },
  medium: {
    width: 100 + 'px',
  },
  large: {
    width: 146 + 'px'
  }
}

const Button = ({ className, variant, children, size }) => {
  const styles = SIZES[size]
  
  let Component;
  if (variant === 'fill') {
    Component = FilledButton
  } else if (variant === 'outline') {
    Component = OutlineButton
  } else {
    Component = GhostButton
  }
  return (
    <Component 
      className={className} 
      style={{
        "width": styles.width
      }}
    >
      {children}
    </Component>
  )
}

const OutlineButton = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #334680;
  padding: 6px;
  width: var(--width);
  font-size: 12px;
  color: ${blue[100]};
`

const FilledButton = styled.button`
  width: var(--width);
  height: 47px;
  border-radius: 4px;
  background-color: ${blue[200]};
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: .4s;

  &:hover {
    background-color: #1363c1;
  }
`

const GhostButton = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #334680;
  padding: 6px;
  width: var(--width);
  font-size: 12px;
  color: ${blue[100]};
`

export default Button