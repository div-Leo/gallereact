import React, { useContext } from 'react';
import GallereactConsumer from '../GallereactContext'


import * as s from '../style.js';

const Dots = () => {
  const {
    index,
    images,
    goToSlide,
    dotStyle,
    primaryColor='#CCC',
    secondaryColor='#333'
  } = useContext(GallereactConsumer)
  
  const handleDotClick = i => {
    i === index || goToSlide(i)
  }

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
