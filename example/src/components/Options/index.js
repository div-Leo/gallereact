import React from 'react';
import PropTypes from 'prop-types';

import './style.sass';

const Options = ({ setOption, option, options }) => {
  return (
    <div className="options_container">
      {options.map((opt, i) => (
        <div
          key={'Option' + i}
          onClick={() => setOption(i)}
          className={option === i ? 'options--active' : 'options'}
        >
          {i === 0 ? 'Default' : `Option ${i}`}
        </div>
      ))}
    </div>
  );
};

Options.propTypes = {
  setOption: PropTypes.func.isRequired,
  option: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
};

export default Options;
