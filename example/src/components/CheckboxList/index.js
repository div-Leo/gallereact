import React from 'react';

import './style.sass';

export default ({setCheckboxOpts, checkboxOpts}) => {

  const handleCheckbox = prop => {
    console.log('value', prop);
    setCheckboxOpts(checkboxOpts => ({...checkboxOpts, [prop]: !checkboxOpts[prop]}))
  }

  return (
  <div className="checks">
    {Object.entries(checkboxOpts).map(([ sliderOpt, enable ]) =>
      <div 
        key={sliderOpt}
        className={`checkbox${enable === true ? '--active' : ''}`} 
        onClick={()=>handleCheckbox(sliderOpt)}>
        {sliderOpt[0].toUpperCase() + sliderOpt.slice(1)}
      </div>
    )}
  </div>
);
}
