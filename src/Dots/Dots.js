import React, { useContext } from 'react';
import GallereactConsumer from '../GallereactContext';

import { S_DotsContainer, S_Dot } from '../style.js';

const Dots = () => {
  const {
    index,
    images,
    goToSlide,
    dotStyle,
    displayDot = true,
    primaryColor = '#CCC',
    secondaryColor = '#333',
  } = useContext(GallereactConsumer);

  const handleDotClick = i => {
    i === index || goToSlide(i);
  };

  return (
    <S_DotsContainer displayDot={displayDot}>
      {images.map((_, id) => (
        <S_Dot
          key={id}
          style={dotStyle}
          active={id === index}
          colors={{ a: primaryColor, b: secondaryColor }}
          onClick={handleDotClick.bind(null, id)}
        />
      ))}
    </S_DotsContainer>
  );
};

export default Dots;
