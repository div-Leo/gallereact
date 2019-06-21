import React from 'react';
import * as s from '../style.js';

const LeftArrow = ({ goToPreviousSlide, arrowStyle, arrowHover, arrowLeftImg, primaryColor = '#CCC' }) => {
  return (
    <s.ArrowL hover={arrowHover} onClick={goToPreviousSlide}>
      { arrowLeftImg 
        ? <img src={arrowLeftImg} style={arrowStyle} alt="" />
        : <s.ArrowIcon style={arrowStyle} primaryColor={primaryColor} ></s.ArrowIcon>
      }
    </s.ArrowL>
  );
};

export default LeftArrow;
