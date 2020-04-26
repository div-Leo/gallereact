import React, { useContext } from 'react';
import GallereactConsumer from '../GallereactContext';

import { S_DotsContainer, S_Dot } from '../style.js';

const Dots = () => {
  const {
    index,
    images,
    goToSlide,
    dotStyle,
    dotActiveStyle,
    displayDot = true,
    primaryColor = '#CCC',
    secondaryColor = '#333',
    dotsContainerStyle,
  } = useContext(GallereactConsumer);

  const handleDotClick = i => {
    i === index || goToSlide(i);
  };

  const activeStyle = Object.assign({}, dotActiveStyle, dotStyle);

  return (
    <S_DotsContainer displayDot={displayDot} style={dotsContainerStyle}>
      {images.map((_, id) => (
        <S_Dot
          key={id}
          style={id === index ? activeStyle : dotStyle}
          active={id === index}
          colors={{ a: primaryColor, b: secondaryColor }}
          onClick={handleDotClick.bind(null, id)}
        />
      ))}
    </S_DotsContainer>
  );
};

export default Dots;
