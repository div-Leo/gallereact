import React from 'react';
import * as s from '../style.js';

const Dot = ({ id, active, dotClick, dotStyle, invert }) => {
  return <s.Dot 
    style={dotStyle} 
    active={active} 
    invert={invert ? {a:'#CCC', b:'#333'} : {a:'#333', b:'#CCC'}} 
    onClick={dotClick.bind(null,id)} 
  />;
};

export default Dot;
