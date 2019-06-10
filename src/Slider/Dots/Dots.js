import React from 'react';

import * as s from '../style.js';

const Dots = ({ index, images, handleDotClick, dotStyle, invert, primary = '#CCC', secondary = '#333'}) => {
  return (
    <s.DotsContainer>
      {images.map((_, id) => (
          <s.Dot  
            key={id}
            style={dotStyle} 
            active={id === index} 
            invert={invert ? {a:primary, b:secondary} : {a:secondary, b:primary}} 
            onClick={handleDotClick.bind(null,id)} 
          />
      ))}
    </s.DotsContainer>
  );
};

export default Dots;
