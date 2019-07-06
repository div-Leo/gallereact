import React, { useContext } from 'react';
import GallereactConsumer from '../GallereactContext';

import Arrow from './Arrow';

import * as s from '../style.js';

const Arrows = () => {
  const {
    arrowStyle,
    displayArrows = true,
    arrowOnHover = false,
    primaryColor = '#CCC',
    arrowLeftImg,
    arrowRightImg,
    goToPreviousSlide,
    goToNextSlide,
    swipe = false,
    images,
    index,
    loop = true,
  } = useContext(GallereactConsumer);

  return (
    !swipe && (
      <s.Arrows>
        {loop || index > 0 ? (
          <Arrow
            {...{
              arrowStyle,
              displayArrows,
              arrowImg: arrowLeftImg,
              arrowOnHover,
              callToAction: goToPreviousSlide,
              primaryColor,
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
              displayArrows,
              arrowImg: arrowRightImg,
              arrowOnHover,
              callToAction: goToNextSlide,
              primaryColor,
              direction: 'right',
            }}
          />
        ) : (
          <div />
        )}
      </s.Arrows>
    )
  );
};

export default Arrows;
