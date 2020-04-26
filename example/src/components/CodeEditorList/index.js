import React from 'react';
import './style.sass';

import CodeEditor from './Editor';

const CodeEditorList = ({ style, setStyle, defaultStyle }) =>
  Object.keys(style).map(styleClass => (
    <CodeEditor
      key={styleClass}
      initialCode={defaultStyle[styleClass]}
      defaultCode={style[styleClass]}
      setStyle={setStyle}
      name={styleClass}
    />
  ));

export default CodeEditorList;
