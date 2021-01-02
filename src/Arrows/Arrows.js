import React, { useCallback, useContext } from 'react';
import GallereactConsumer from '../GallereactContext';

import Arrow from './Arrow';

import { S_Arrows } from '../style.js';

const Arrows = () => {
  const {
    arrowStyle,
    arrowsContainerStyle,
    arrowAreaStyle,
    displayArrows = true,
    arrowOnHover = false,
    primaryColor = '#CCC',
    arrowLeftImg,
    arrowRightImg,
    goToSlide,
    swipe = false,
    images,
    index,
    loop = true,
  } = useContext(GallereactConsumer);

  const goToPrevSlide = useCallback(() => {
    goToSlide('prev');
  }, [loop, swipe, images]);

  const goToNextSlide = useCallback(() => {
    goToSlide('next');
  }, [loop, swipe, images]);

  return (
    !swipe && (
      <S_Arrows style={arrowsContainerStyle}>
        {loop || index > 0 ? (
          <Arrow
            {...{
              arrowStyle,
              arrowAreaStyle,
              displayArrows,
              arrowOnHover,
              primaryColor,
              arrowImg: arrowLeftImg,
              callToAction: goToPrevSlide,
              direction: 'left',
            }}
          />
        ) : (
          <div />
        )}
        {loop || index < images.length - 1 ? (
          <Arrow
            {...{
              arrowStyle,
              arrowAreaStyle,
              displayArrows,
              arrowOnHover,
              primaryColor,
              arrowImg: arrowRightImg,
              callToAction: goToNextSlide,
              direction: 'right',
            }}
          />
        ) : (
          <div />
        )}
      </S_Arrows>
    )
  );
};

export default Arrows;
