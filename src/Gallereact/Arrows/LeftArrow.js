import React from 'react';
import * as s from '../style.js';

const LeftArrow = ({ goToPreviousSlide, arrowStyle, arrowHover, arrowLeftImg, primary }) => {
  return (
    <s.ArrowL hover={arrowHover} onClick={goToPreviousSlide}>
      { arrowLeftImg 
        ? <img src={arrowLeftImg} style={arrowStyle} alt="" />
        : <s.ArrowIcon style={arrowStyle} primary={primary} ></s.ArrowIcon>
      }
    </s.ArrowL>
  );
};

export default LeftArrow;
