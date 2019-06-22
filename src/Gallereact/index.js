import React, { useRef, useEffect, useState } from 'react';

import Arrow from './Arrows';
import Dots from './Dots';
import Tagline from './Tagline';

import * as s from './style.js';

const initialState = {
  index:0,
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
    index,
    images = []
  } = props;

  if (!images.length) return null;

  const [state, setState] = useState(initialState);
  const slider = useRef();
  
  useEffect(() => {},[props])

  useEffect(() => {
    document.addEventListener('mouseup', reset, false);
    document.addEventListener('touchend', reset, false);
  },[])

  useEffect(() => {
    const play = autoPlay && setTimeout(goToNextSlide, duration);
    return () => clearTimeout(play)
  },[state.index, props.autoPlay])

  useEffect(() => {
    goToSlide(index);
  },[index])

  const reset = () => {
    setState(state => ({ ...state, x0: null, translateDrag: 0, translateDuration: 0.5}));
  };

  const muve = e => {
    const { clientX } = unify(e)
    if (state.x0) {
      const dx = clientX - state.x0;
      const s = Math.sign(dx);
      const f = +(s*dx/getWidth(slider)).toFixed(2);
      if(f > .2) {
        setState(state => ({
          ...state, x0: null, translateDrag: 0, translateDuration: 1 - f,
        }))
        goToSlide(state.index - s)
      }
    } else {
      setState(state => ({
        ...state, translateDuration: 0.5, x0: null, translateDrag: 0
      }));
    }
  };

  const lock = (e) => {
    const { clientX } = unify(e)
    setState(state => ({...state, x0: clientX, translateDuration: 0}));
  };

  const drag = (e) => {
    if (state.x0) {
      const { clientX } = unify(e)
      setState(state =>({...state, translateDrag: Math.round(clientX - state.x0)}));
    }
  };

  const unify = (e) => e.changedTouches ? e.changedTouches[0] : e;

  const goToPreviousSlide = () => {
    const { index } = state;
    const i = index > 0  
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
    i === state.index || goToSlide(i)
  }

  const goToSlide = index => {
    if (index >= 0 && index < images.length) {
      setState(state => ({ ...state, index }));
      callback && callback(index)
    }
  }

  const getWidth = ({current}) => current && current.getBoundingClientRect().width;
  
  return (
    <s.Container>
      <s.Gallery cover={cover} style={containerStyle}>
        <s.Slider
          onTouchStart={lock} onTouchMove={drag} onTouchEnd={muve}
          onMouseDown={lock} onMouseMove={drag} onMouseUp={muve}
          sliderWidth={getWidth(slider)}
          transition={swipe || transition}
          index={state.index}
          translateDrag={state.translateDrag}
          translateDuration={state.translateDuration}
          ref={slider}>
          {images.map((curr, i) => 
            <s.Slide 
              style={slideStyle}
              cover={cover} 
              key={i} 
              image={curr.image}> 
              <Tagline {...{curr, taglineStyle, titleStyle, captionStyle}} />
            </s.Slide>
            )}
        </s.Slider>
        {!swipe && <s.Arrows>
          <Arrow {...{arrowStyle, arrowImg: arrowLeftImg, arrowHover, callToAction: goToPreviousSlide, primaryColor, direction: 'left'}}/>
          <Arrow {...{arrowStyle, arrowImg: arrowRightImg, arrowHover, callToAction: goToNextSlide, primaryColor, direction: 'right'}}/>
        </s.Arrows>}
      </s.Gallery>
      <Dots
        index={state.index}
        {...{images, handleDotClick, dotStyle, invert, primaryColor, secondaryColor}}
        />
    </s.Container>
  );
}

export default Slider;
