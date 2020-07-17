import React, { useRef, useContext } from 'react';

import GallereactConsumer from '../GallereactContext';
import useSwipeAction from './useSwipeAction';

import Tagline from '../Tagline';

import { S_Slide, S_Slider } from '../style.js';

const Slider = () => {
  const {
    index,
    images,
    cover = true,
    transition = true,
    swipe = false,
    goToSlide,
    slideStyle,
    taglineStyle,
    titleStyle,
    captionStyle,
  } = useContext(GallereactConsumer);
  const slider = useRef();

  const sliderWidth = slider.current && slider.current.getBoundingClientRect().width;
  const { listeners, translateState } = useSwipeAction(index, sliderWidth, goToSlide);

  const renderSlides = images.map((curr, i) => (
    <S_Slide key={i} style={slideStyle} cover={cover} image={curr.image || curr}>
      <Tagline {...{ curr, taglineStyle, titleStyle, captionStyle }} />
    </S_Slide>
  ));

  return (
    <S_Slider
      {...listeners}
      width={sliderWidth}
      transition={swipe || transition}
      index={index}
      {...translateState}
      ref={slider}
    >
      {renderSlides}
    </S_Slider>
  );
};

export default Slider;
