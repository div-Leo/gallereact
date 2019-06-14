import React, { useEffect } from 'react';

import Prism from "prismjs";
import 'prismjs/components/prism-jsx.min';
import "./lightSyntax.css";

const CodeBlock = ({defaultState, style, ...props}) => {
  useEffect(()=> Prism.highlightAll())
  return (
    <pre>
      <code className="language-jsx">
        {`<Slider images={[]} ${Object.entries(props).reduce((a,[k,v]) => 
            v !== defaultState[k] ? a + `${k}={${v[0] === '#' ? JSON.stringify(v) : v}} ` : a
          ,'')}${Object.entries(style).reduce((a,[k,v]) =>
            a + `${k}={${JSON.stringify(v).replace(/"([^(")"]+)":/g,"$1:")}} `, '')} />`}
      </code>
    </pre>
  )
}

export default CodeBlock;