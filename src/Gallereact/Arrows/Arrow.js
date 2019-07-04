import React from 'react';
import * as s from '../style.js';

const Arrow = ({ callToAction, direction, arrowStyle, displayArrows, arrowOnHover, arrowImg, primaryColor }) => {
  return (
    <s.Arrow direction={direction} hover={arrowOnHover} onClick={callToAction}>
      { arrowImg 
        ? <img src={arrowImg} style={arrowStyle} alt="" />
        : <s.ArrowIcon displayArrows={displayArrows} direction={direction} style={arrowStyle} primaryColor={primaryColor} ></s.ArrowIcon>
      }
    </s.Arrow>
  );
};

export default Arrow;
