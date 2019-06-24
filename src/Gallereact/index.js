import React, { useEffect, useState } from 'react';

import { GallereactProvider } from './GallereactContext'
import Slider from './Slider';
import Arrows from './Arrows';
import Dots from './Dots';

import * as s from './style.js';

const Gallereact = (props) => {
  const {
    cover=true,
    loop=!props.swipe,
    callback,
    containerStyle,
    autoPlay,
    duration=2000,
    inputIndex,
    images=[]
  } = props;

  if (!images.length) return null;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const play = autoPlay && setTimeout(goToNextSlide, duration);
    return () => clearTimeout(play)
  },[index, autoPlay])

  useEffect(() => {
    goToSlide(inputIndex);
  },[inputIndex])
  
  const goToPreviousSlide = () => {
    let i = index;
    if (index > 0) i = index - 1 
    else if (loop) i = images.length - 1
    goToSlide(i);
  }
  
  const goToNextSlide = () => {
    let i = index;
    if (index < images.length-1) i = index + 1 
    else if (loop) i = 0
    goToSlide(i);
  }
  
  const goToSlide = i => {
    if (i >= 0 && i < images.length) {
      setIndex(i);
      callback && callback(i)
    }
  }

  return (
    <GallereactProvider 
      value={{ index, ...props, goToPreviousSlide, goToNextSlide, goToSlide}}>
      <s.Container>
        <s.Gallery cover={cover} style={containerStyle}>
          <Slider />
          <Arrows />
        </s.Gallery>
        <Dots />
      </s.Container>
    </GallereactProvider>
  );
}

export default Gallereact;
