import React from 'react';
import * as s from '../style.js';

import ArrowRight from '../../assets/ArrowRight.svg';

const RightArrow = ({ nextSlide, arrowStyle, arrowHover, arrowRightImg }) => {
  return (
    <s.ArrowR hover={arrowHover} onClick={nextSlide}>
      <img src={arrowRightImg || ArrowRight} style={arrowStyle} alt="" />
    </s.ArrowR>
  );
};

export default RightArrow;
