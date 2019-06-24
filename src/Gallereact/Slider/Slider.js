import React, { useRef, useContext } from 'react';

import GallereactConsumer from '../GallereactContext'
import useSwipeAction from './useSwipeAction'

import Tagline from '../Tagline';

import * as s from '../style.js';

const Slider = () => {
  const { 
    index,
    images,
    cover=true,
    transition=true,
    swipe=false,
    goToSlide,
    slideStyle,
    taglineStyle,
    titleStyle,
    captionStyle 
  } = useContext(GallereactConsumer);
  const slider = useRef();
  
  const sliderWidth = slider.current && slider.current.getBoundingClientRect().width;
  const { listeners, translateState } = useSwipeAction(index, sliderWidth, goToSlide);

  const renderSlides = images.map((curr, i) => 
    <s.Slide 
      key={i}
      style={slideStyle}
      cover={cover}
      image={curr.image}>
        <Tagline {...{curr, taglineStyle, titleStyle, captionStyle}} />
    </s.Slide>
  )

  return (
    <s.Slider
      {...listeners}
      sliderWidth={sliderWidth}
      transition={swipe || transition}
      index={index}
      {...translateState}
      ref={slider}>
        {renderSlides}
    </s.Slider>
  )
}

export default Slider;
