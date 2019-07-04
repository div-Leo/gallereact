import React, { useEffect } from 'react';

import Prism from "prismjs";
import 'prismjs/components/prism-jsx.min';
import "./lightSyntax.css";

const CodeBlock = ({defaultCheckboxes, style, checkboxOpts, colors}) => {
  useEffect(()=> { Prism.highlightAll() })
  const galleryOptions = {...checkboxOpts, ...colors}
  return (
    <div className="codeBlock_title">
      <pre>
        <code className="language-jsx">
          {`<Slider\n  images={[/* array of images */]} ${Object.entries(galleryOptions).reduce((a,[k,v]) => 
              v !== defaultCheckboxes[k] ? a + `\n  ${k}={${v[0] === '#' ? JSON.stringify(v) : v}} ` : a
            ,'')}${Object.entries(style).reduce((a,[k,v]) =>
              a + (Object.keys(v).length ? `\n  ${k}={${JSON.stringify(v).replace(/"([^(")"]+)":/g,"$1:")}} ` : ''), '')} \n/>`}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock;