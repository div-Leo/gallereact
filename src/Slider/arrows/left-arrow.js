import React from 'react';
import * as s from '../style.js';

import ArrowLeft from '../../assets/ArrowLeft.svg';


const LeftArrow = ({ prevSlide, arrowStyle, arrowHover, arrowLeftImg }) => {
  return (
    <s.ArrowL hover={arrowHover} onClick={prevSlide}>
      <img src={arrowLeftImg || ArrowLeft} style={{arrowStyle}} alt="" />
    </s.ArrowL>
  );
};

export default LeftArrow;
