import React from 'react';
import './style.sass';

import CodeEditor from './Editor';

const CodeEditorList = ({ style, setStyle }) =>
  Object.keys(style).map(styleClass => 
    <CodeEditor 
      key={styleClass} 
      defaultCode={style[styleClass]} 
      setStyle={setStyle} 
      name={styleClass}
    />
  )

export default CodeEditorList;