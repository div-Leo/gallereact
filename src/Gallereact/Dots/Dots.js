import React from 'react';

import * as s from '../style.js';

const Dots = ({ index, images, handleDotClick, dotStyle, primaryColor = '#CCC', secondaryColor = '#333'}) => {
  return (
    <s.DotsContainer>
      {images.map((_, id) => (
          <s.Dot  
            key={id}
            style={dotStyle} 
            active={id === index} 
            color={{a:primaryColor, b:secondaryColor}}
            onClick={handleDotClick.bind(null,id)} 
          />
      ))}
    </s.DotsContainer>
  );
};

export default Dots;
