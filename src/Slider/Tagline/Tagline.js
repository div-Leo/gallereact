import React from 'react';

import * as s from '../style.js';

function Tagline({i, titles, captions, taglineStyle, titleStyle, captionStyle}) {
  return ( titles.length || captions.lenght ?
    <s.Tagline style={taglineStyle}>
      <s.Title style={titleStyle}>{titles[i]}</s.Title>
      <s.Caption style={captionStyle}>{captions[i]}</s.Caption>
    </s.Tagline> 
    : null
  )
}

export default Tagline;
