import React from 'react';
import './style.sass';

import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

export default ({handleCheckbox, ...props}) => (
  <div className="checks">
    {Object.entries(props).map(([k,v]) =>
      <Checkbox key={k} className="checkbox" onChange={handleCheckbox} checked={v} value={k}>
        {k.split('')[0].toUpperCase() + k.slice(1)}
      </Checkbox>
    )}
  </div>
);
