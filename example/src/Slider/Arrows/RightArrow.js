import React from 'react';
import * as s from '../style.js';

import ArrowRight from './assets/ArrowRight.svg';

const RightArrow = ({ goToNextSlide, arrowStyle, arrowHover, arrowRightImg }) => {
  return (
    <s.ArrowR hover={arrowHover} onClick={goToNextSlide}>
      <img src={arrowRightImg || ArrowRight} style={arrowStyle} alt="" />
    </s.ArrowR>
  );
};

export default RightArrow;
