import React from 'react';
import Dot from './dot';

import * as s from '../style.js';

const Dots = ({ index, images, dotClick, dotStyle, invert }) => {
  return (
    <s.DotsContainer>
      {images.map((image, i) => {
        let active = (i === index);
        return (
          <Dot
            key={i}
            id={i}
            active={active}
            dotClick={dotClick}
            dotStyle={dotStyle}
            invert={invert}
          />
        );
      })}
    </s.DotsContainer>
  );
};

export default Dots;
