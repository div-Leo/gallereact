import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.sass';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx.min';

const CodeEditor = ({ defaultCode, setStyle, name }) => {
  const stringifyedCode = sringifyCode(defaultCode);
  const [code, setCode] = useState(stringifyedCode || '');

  useEffect(() => {
    try {
      const styleObj = code && parseCode(code);
      setStyle(style => ({ ...style, [name]: styleObj || {} }));
    } catch (e) {}
  }, [code]);

  useEffect(() => {
    try {
      const stringifyedCode = sringifyCode(defaultCode);
      setCode(stringifyedCode || '');
    } catch (e) {}
  }, [defaultCode]);

  return (
    <div className="editor_container">
      <h3 htmlFor="containerStyle">{fromatTitle(name)}</h3>
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={code => highlight(code, languages.jsx)}
        padding={10}
        className="editor"
      />
    </div>
  );
};

const fromatTitle = name => {
  let title = name[0].toUpperCase() + name.slice(1).replace('Style', '');
  if (title === 'Outer') title += ' (your external container)';
  return title;
};

const parseCode = code => {
  const formattedCode = code
    .replace(/([^{\n ]+):/g, '"$1":') // wrap keys with double quotes
    .replace(/([\n]+)/g, '') // trimm new line characters
    .replace(/(\/\*.+\*\/)/g, ''); // delete comments
  return JSON.parse(formattedCode);
};

const sringifyCode = defaultCode => {
  if (!Object.entries(defaultCode).length) return `{ /* insert your style here */ }`;
  return JSON.stringify(defaultCode)
    .replace(/"([^(")"]+)":/g, '\n  $1:') // delete keys double quotes
    .replace('}', '\n}'); // after last property insert new line
};

CodeEditor.propTypes = {
  setStyle: PropTypes.func.isRequired,
  defaultCode: PropTypes.object,
  name: PropTypes.string.isRequired,
};

export default CodeEditor;
