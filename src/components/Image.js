import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.img`
  width: var(--width);
  height: var(--height);
  border-radius: 4px;
  object-fit: cover;
  margin-right: 16px;
`

const SIZES = {
  small: {
    width: 45 + 'px',
    height: 45 + 'px'
  },
  medium: {
    width: 90 + 'px',
    height: 90 + 'px'
  }
}

const Image = ({ src, alt, size }) => {
  const styles = SIZES[size]

  if (!styles) {
    throw new Error(`Unknown size passed to Image: ${size}`);
  }

  return (
    <ImageWrapper 
      src={src} 
      alt={alt} 
      style={{ width: styles.width, height: styles.height}}
    />
  )
}

export default Image