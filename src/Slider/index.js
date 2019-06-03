import React, { useRef, useEffect, useState, useCallback } from 'react';

import LeftArrow from './arrows/left-arrow';
import RightArrow from './arrows/right-arrow';
import Dots from './dots';

import * as s from './style.js';

const initialState = {
  index:0,
  translateValue: 0,
  translateDrag: 0,
  translateDutation: 0.5,
  x0: null,
};

/** Image slider */
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
    duration=5000,
    images = []
  } = props;

  // const slider = useRef();
  /**
   * Initial state.
   * @param { number } index - of the current slide.
   * @param { number(px) } translateValue - px to transalte the image.
   */
  const [state, setState] = useState(initialState);
  const [listeners, setListeners] = useState(false);
  const slider = useRef();

  useEffect(() => {
    const { current } = slider;
    if (current && !listeners) {
      const list = [
        [lock, 'mousedown', 'touchstart'],
        [muve, 'mouseup', 'touchend'],
        [drag, 'mousemove', 'touchmove'],]
      list.forEach(([method, mouseE, touchM]) => {
        current.addEventListener(touchM, method, false);
        current.addEventListener(mouseE, method, false);
      })
      document.addEventListener('touchend', reset, false);
      document.addEventListener('mouseup', reset, false);
      setListeners(true);
    }
  })

  useEffect(() => {
    const play = autoPlay && setInterval(goToNextSlide, duration);
    return play && clearInterval(play)
  },[])

  const reset = e => {
    setState(state => ({ ...state, x0: null, translateDrag: 0, translateDutation: 0.5}));
  };

  const muve = (e) => {
    setState(state => {
      if (state.x0) {
        const dx = unify(e).clientX - state.x0;
        const s = Math.sign(dx);
        const f = +(s*dx/slider.current.offsetWidth).toFixed(2);
        if((state.index > 0 || s < 0) && (state.index < images.length - 1 || s > 0) && f > .2) {
          goToSlide(state.index - s)
          return {
            ...state,
            x0: null, 
            translateDrag: 0, 
            translateDutation: 1 - f,
          }
        }
      } 
      return {...state, translateDutation: 0.5,};
    });
  };

  const lock = (e) => {
    setState(state => ({...state, x0: unify(e).clientX, translateDutation: 0}));
  };

  const drag = (e) => {
    e.preventDefault();
    setState(state => 
      state.x0 
        ? {...state, translateDrag: Math.round(unify(e).clientX - state.x0)}
        : state);
  };

  const unify = (e) => e.changedTouches ? e.changedTouches[0] : e;

  /**
   * Translate toward the prev slide.
   * Set the state with the index and translateValue.
   * If it's the first slide go to the last.
   */
  const goToPreviousSlide = () => {
    const { index } = state;
    const i = index < images.length - 1 
    ? index - 1 
    : loop ? images.length - 1 : index;
    goToSlide(i);
  }

  /**
   * Translate toward the next slide.
   * Set the state with the index and translateValue.
   * If it's the last slide go to the first.
   */
  const goToNextSlide = () => {
    const { index } = state;
    const i = index < images.length - 1 
      ? index + 1 
      : loop ? 0 : index;
    goToSlide(i);
  }

  /**
   * Translate toward the selected slide.
   * Set the state with the corrispondent 
   * index to the dot and translateValue.
   */
  const handleDotClick = i => {
    const { index } = state;
    if (i === index) return;
    goToSlide(i);
  }

  const goToSlide = index => {
    setState(state => ({ ...state, index }));
    callback && callback(index)
  }

  const getWidth = ({current}) => current && current.getBoundingClientRect().width
  
  /**
   * Render the entire slide with arrows and dots.
   * @return { component } Container component.
   */

  return (
    !!images.length && 
      <s.Container>
        <s.Gallery cover={cover} style={containerStyle}>
          <s.Slider id="slider" 
            translateDutation={state.translateDutation} 
            sliderWidth={getWidth(slider)} 
            index={state.index} 
            transition={transition} 
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
