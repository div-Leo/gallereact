import React from 'react';

import * as s from '../style.js';

function Tagline({curr, taglineStyle, titleStyle, captionStyle}) {
  return ( curr.title || curr.caption ?
    <s.Tagline style={taglineStyle}>
      <s.Title style={titleStyle}>{curr.titles}</s.Title>
      <s.Caption style={captionStyle}>{curr.captions}</s.Caption>
    </s.Tagline> 
    : null
  )
}

export default Tagline;
