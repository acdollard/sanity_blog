import React from 'react'
import { ParagraphTextStyles } from '../../styles/typography/ParagraphTextStyles';

function ParagraphText({ children, ...props }) {
  return (
    <ParagraphTextStyles>{children}</ParagraphTextStyles>
  )
}

export default ParagraphText;