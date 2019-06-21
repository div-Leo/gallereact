import React from 'react';

import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

export default ({setCheckboxOpts, checkboxOpts}) => {

  const handleCheckbox = e => {
    const { value, checked } = e.target;
    setCheckboxOpts(checkboxOpts => ({...checkboxOpts, [value]: checked}))
  }

  return (
  <div className="checks">
    {Object.entries(checkboxOpts).map(([ sliderOpt, enable ]) =>
      <Checkbox 
        key={sliderOpt}
        className="checkbox"
        onChange={handleCheckbox}
        checked={enable}
        value={sliderOpt}>
          {sliderOpt[0].toUpperCase() + sliderOpt.slice(1)}
      </Checkbox>
    )}
  </div>
);
}