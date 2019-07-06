import React from 'react';
import PropTypes from 'prop-types';

import './style.sass';

const CheckboxList = ({ setCheckboxOpts, checkboxOpts }) => {
  const handleCheckbox = prop => {
    setCheckboxOpts(checkboxOpts => ({ ...checkboxOpts, [prop]: !checkboxOpts[prop] }));
  };

  return (
    <div className="checks">
      {Object.entries(checkboxOpts).map(([sliderOpt, enable]) => (
        <div
          key={sliderOpt}
          className={`checkbox${enable === true ? '--active' : ''}`}
          onClick={() => handleCheckbox(sliderOpt)}
        >
          {sliderOpt[0].toUpperCase() + sliderOpt.slice(1)}
        </div>
      ))}
    </div>
  );
};

CheckboxList.propTypes = {
  setCheckboxOpts: PropTypes.func.isRequired,
  checkboxOpts: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CheckboxList;
