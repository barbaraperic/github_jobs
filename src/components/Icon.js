import React from 'react';
import { Briefcase, Clock, Globe } from 'react-feather';

const icons = {
  briefcase: Briefcase,
  clock: Clock,
  globe: Globe
}

const Icon = ({ id }) => {
  const Component = icons[id]
  return (
    <div>
      <Component color="#B7BCCE" size="16"/>
    </div>
  )
}

export default Icon
