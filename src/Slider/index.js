import React, { useRef, useEffect, useState } from 'react';

import LeftArrow from './arrows/left-arrow';
import RightArrow from './arrows/right-arrow';
import Dots from './dots';

import * as s from './style.js';

const initialState = {
  index:0,
  translateValue: 0,
  translateDrag: 0,
  translateDuration: 0.5,
  x0: null,
};

const Slider = (props) => {
  const {
    cover=true,
    invert=false,
    loop=!props.swipe,
    arrowHover=false,
    swipe=false,
    transition=true,
    callback,
    containerStyle,
    slideStyle,
    dotStyle,
    arrowStyle,
    arrowLeftImg,
    arrowRightImg,
    autoPlay,
    duration=2000,
    index,
    images = []
  } = props;

  if (!images.length) return null;

  const [state, setState] = useState(initialState);
  const slider = useRef();

  useEffect(() => {
    document.addEventListener('mouseup', reset, false);
    document.addEventListener('touchend', reset, false);
  },[])

  useEffect(() => {
    const play = autoPlay && setTimeout(goToNextSlide, duration);
    return () => clearTimeout(play)
  },[state.index])

  useEffect(() => {
    goToSlide(index);
  },[index])

  const reset = () => {
    setState(state => ({ ...state, x0: null, translateDrag: 0, translateDuration: 0.5}));
  };

  const muve = e => {
    e.persist();
    if (state.x0) {
      const dx = unify(e).clientX - state.x0;
      const s = Math.sign(dx);
      const f = +(s*dx/getWidth(slider)).toFixed(2);
      if(f > .2) {
        setState(state => ({
          ...state,
          x0: null,
          translateDrag: 0,
          translateDuration: 1 - f,
        }))
        goToSlide(state.index - s)
      }
    } else setState(state => ({...state, translateDuration: 0.5, x0: null, translateDrag: 0}));
  };

  const lock = (e) => {
    e.persist();
    setState(state => ({...state, x0: unify(e).clientX, translateDuration: 0}));
  };

  const drag = (e) => {
    if (state.x0) {
      e.persist();
      setState(state =>({...state, translateDrag: Math.round(unify(e).clientX - state.x0)}));
    }
  };

  const unify = (e) => e.changedTouches ? e.changedTouches[0] : e;

  const goToPreviousSlide = () => {
    const { index } = state;
    const i = index < images.length - 1 
    ? index - 1 
    : loop ? images.length - 1 : index;
    goToSlide(i);
  }

  const goToNextSlide = () => {
    const { index } = state;
    const i = index < images.length - 1 
      ? index + 1 
      : loop ? 0 : index;
    goToSlide(i);
  }

  const handleDotClick = i => {
    const { index } = state;
    if (i === index) return;
    goToSlide(i);
  }

  const goToSlide = index => {
    if (index >= 0 && index < images.length) {
      setState(state => ({ ...state, index }));
      callback && callback(index)
    }
  }

  const getWidth = ({current}) => current && current.getBoundingClientRect().width
  
  /**
   * Render the entire slide with arrows and dots.
   * @return { component } Container component.
   */
  return (
    <s.Container>
      <s.Gallery cover={cover} style={containerStyle}>
        <s.Slider id="slider"
          onTouchStart={lock} onTouchMove={drag} onTouchEnd={muve}
          onMouseDown={lock} onMouseMove={drag} onMouseUp={muve}
          translateDuration={state.translateDuration} 
          sliderWidth={getWidth(slider)} 
          index={state.index} 
          transition={transition}
          autoPlay={autoPlay}
          translateDrag={state.translateDrag}
          ref={slider}>
          {images.map((curr, i) => <s.Slide style={slideStyle} cover={cover} key={i} image={curr}/>)}
        </s.Slider>
      </s.Gallery>
      <Dots
        index={state.index}
        images={images}
        dotClick={handleDotClick}
        dotStyle={dotStyle}
        invert={invert}
        />
      {!swipe && <s.Arrows>
        <LeftArrow arrowStyle={arrowStyle} arrowLeftImg={arrowLeftImg} arrowHover={arrowHover} prevSlide={goToPreviousSlide}/>
        <RightArrow arrowStyle={arrowStyle} arrowRightImg={arrowRightImg} arrowHover={arrowHover} nextSlide={goToNextSlide} />
      </s.Arrows>}
    </s.Container>
  );
}

export default Slider;

