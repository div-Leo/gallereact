import React, { useEffect } from 'react';

import Prism from "prismjs";
import 'prismjs/components/prism-jsx.min';
import "./lightSyntax.css";

const CodeBlock = ({defaultState, style, galleryOptions}) => {
  useEffect(()=> { Prism.highlightAll() })
  return (
    <pre>
      <code className="language-jsx">
        {`<Slider\n  images={[/* array of images */]} ${Object.entries(galleryOptions).reduce((a,[k,v]) => 
            v !== defaultState[k] ? a + `\n  ${k}={${v[0] === '#' ? JSON.stringify(v) : v}} ` : a
          ,'')}${Object.entries(style).reduce((a,[k,v]) =>
            a + (Object.keys(v).length ? `\n  ${k}={${JSON.stringify(v).replace(/"([^(")"]+)":/g,"$1:")}} ` : ''), '')} \n/>`}
      </code>
    </pre>
  )
}

export default CodeBlock;