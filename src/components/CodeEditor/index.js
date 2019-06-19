import React, { useState, useEffect } from 'react';
import './style.sass';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from "prismjs";
import 'prismjs/components/prism-jsx.min';

const CodeEditor = ({ defaultCode, setStyle, name }) => {
  const stringifyedCode = defaultCode && JSON.stringify(defaultCode).replace(/"([^(")"]+)":/g,'\n  $1:').replace('}', '\n}')
  const [code, setCode] = useState(stringifyedCode || '')

  useEffect(()=>{
    try {
      const styleObj = code && JSON.parse(code.replace(/([^{\n ]+):/g,'"$1":').replace(/([\n]+)/g,'').replace(/(\/\*.+\*\/)/g, ''));
      setStyle(style => ({...style, [name]:styleObj || {}}))
    } catch (e) {}
  },[code])

  return (
    <div className="editor_container">
      <h3 htmlFor="containerStyle">{name[0].toUpperCase() + name.slice(1).replace('Style','')}</h3>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={code => highlight(code, languages.jsx)}
        padding={10}
        className="editor"
      />
    </div>
  );
}

export default CodeEditor;