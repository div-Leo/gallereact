import React from 'react';
import * as s from '../style.js';

const RightArrow = ({ goToNextSlide, arrowStyle, arrowHover, arrowRightImg, primary }) => {
  return (
    <s.ArrowR hover={arrowHover} onClick={goToNextSlide}>
      { arrowRightImg 
        ? <img src={arrowRightImg} style={arrowStyle} alt="" />
        : <s.ArrowIcon right style={arrowStyle} primary={primary} ></s.ArrowIcon>
      }
    </s.ArrowR>
  );
};

export default RightArrow;
