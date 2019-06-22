import React from 'react';
import * as s from '../style.js';

const Arrow = ({ callToAction, direction, arrowStyle, arrowHover, arrowImg, primaryColor = '#CCC' }) => {
  return (
    <s.Arrow direction={direction} hover={arrowHover} onClick={callToAction}>
      { arrowImg 
        ? <img src={arrowImg} style={arrowStyle} alt="" />
        : <s.ArrowIcon direction={direction} style={arrowStyle} primaryColor={primaryColor} ></s.ArrowIcon>
      }
    </s.Arrow>
  );
};

export default Arrow;
