import React from 'react';
import { GrLike } from 'react-icons/gr';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  return (
    <LogoStyles to="/#">
      <GrLike to='/#'/>
    </LogoStyles>
  )
}

export default Logo