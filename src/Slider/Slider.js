import React, { useRef, useContext, useMemo } from 'react';

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
    children,
  } = useContext(GallereactConsumer);
  const slider = useRef();

  const sliderWidth = slider.current && slider.current.getBoundingClientRect().width;
  const swipeAction = useSwipeAction(index, sliderWidth, goToSlide, swipe);

  const renderSlides = useMemo(
    () =>
      images.map((curr, i) =>
        children ? (
          <S_Slide key={i}>{children(curr, i)}</S_Slide>
        ) : (
          <S_Slide key={i} style={slideStyle} cover={cover} image={curr.image || curr}>
            <Tagline {...{ curr, taglineStyle, titleStyle, captionStyle }} />
          </S_Slide>
        ),
      ),
    [images, slideStyle, cover, taglineStyle, titleStyle, captionStyle],
  );

  const swipeOptions = swipe &&
    swipeAction && { ...swipeAction.listeners, ...swipeAction.translateState };

  return (
    <S_Slider
      ref={slider}
      width={sliderWidth}
      transition={swipe || transition}
      index={index}
      {...swipeOptions}
    >
      {renderSlides}
    </S_Slider>
  );
};

export default Slider;
