import React, { useRef, useEffect, useState } from 'react';

import Arrow from './Arrows';
import Dots from './Dots';
import Tagline from './Tagline';

import * as s from './style.js';

const initialTranslateState = {
  translateDrag: 0,
  translateDuration: 0.5,
  x0: null,
};

const Slider = (props) => {
  const {
    cover=true,
    invert=false,
    loop=!props.swipe,
    transition=true,
    arrowHover=false,
    swipe=false,
    callback,
    containerStyle,
    slideStyle,
    taglineStyle,
    captionStyle,
    titleStyle,
    primaryColor,
    secondaryColor,
    dotStyle,
    arrowStyle,
    arrowLeftImg,
    arrowRightImg,
    autoPlay,
    duration=2000,
    inputIndex,
    images = []
  } = props;

  if (!images.length) return null;

  const [translateState, setTranslateState] = useState(initialTranslateState);
  const [index, setIndex] = useState(0);
  const slider = useRef();

  useEffect(() => {
    const play = autoPlay && setTimeout(goToNextSlide, duration);
    return () => clearTimeout(play)
  },[index, autoPlay])

  useEffect(() => {
    goToSlide(inputIndex);
  },[inputIndex])

  useEffect(() => {
    document.addEventListener('mouseup', reset, false);
    document.addEventListener('touchend', reset, false);
  },[])

  const reset = () => {
    setTranslateState(initialTranslateState);
  };

  const muve = e => {
    const { clientX } = unify(e)
    if (translateState.x0) {
      const dx = clientX - translateState.x0;
      const s = Math.sign(dx);
      const f = +(s*dx/getWidth(slider)).toFixed(2);
      if(f > .2) {
        setTranslateState(state => ({
          ...state, x0: null, translateDrag: 0, translateDuration: 1 - f,
        }))
        goToSlide(index - s)
      }
    } else {
      setTranslateState(initialTranslateState);
    }
  };

  const lock = (e) => {
    const { clientX } = unify(e)
    setTranslateState(state => ({...state, x0: clientX, translateDuration: 0}));
  };

  const drag = (e) => {
    if (translateState.x0) {
      const { clientX } = unify(e)
      setTranslateState(state =>({...state, translateDrag: Math.round(clientX - state.x0)}));
    }
  };

  const unify = (e) => e.changedTouches ? e.changedTouches[0] : e;

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

  const getWidth = ({current}) => current && current.getBoundingClientRect().width;
  
  return (
    <s.Container>
      <s.Gallery cover={cover} style={containerStyle}>
        <s.Slider
          onTouchStart={lock} 
          onTouchMove={drag} 
          onTouchEnd={muve}
          onMouseDown={lock} 
          onMouseMove={drag} 
          onMouseUp={muve}
          sliderWidth={getWidth(slider)}
          transition={swipe || transition}
          index={index}
          translateDrag={translateState.translateDrag}
          translateDuration={translateState.translateDuration}
          ref={slider}>
            {images.map((curr, i) => 
              <s.Slide 
                key={i}
                style={slideStyle}
                cover={cover}
                image={curr.image}>
                  <Tagline {...{curr, taglineStyle, titleStyle, captionStyle}} />
              </s.Slide>
            )}
        </s.Slider>
        {!swipe && 
          <s.Arrows>
            <Arrow {...{arrowStyle, arrowImg: arrowLeftImg, arrowHover, callToAction: goToPreviousSlide, primaryColor, direction: 'left'}}/>
            <Arrow {...{arrowStyle, arrowImg: arrowRightImg, arrowHover, callToAction: goToNextSlide, primaryColor, direction: 'right'}}/>
          </s.Arrows>}
      </s.Gallery>
      <Dots {...{index, images, goToSlide, dotStyle, invert, primaryColor, secondaryColor}}/>
    </s.Container>
  );
}

export default Slider;

