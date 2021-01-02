import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { GallereactProvider } from './GallereactContext';
import Slider from './Slider';
import Arrows from './Arrows';
import Dots from './Dots';
import Preview from './Preview';

import { S_Gallery } from './style.js';

const Gallereact = props => {
  const {
    loop = true,
    callback,
    containerStyle,
    autoPlay,
    duration = 2000,
    inputIndex,
    images = [],
    swipe = false,
    displayPreview = false,
  } = props;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const play = autoPlay && setTimeout(goToNextSlide, duration);
    return () => clearTimeout(play);
  }, [index, autoPlay]);

  useEffect(() => {
    typeof inputIndex === 'number' && goToSlide(inputIndex);
  }, [inputIndex]);

  const goToSlide = (i = 0) => {
    setIndex(index => {
      if (i === 'next') {
        if (index < images.length - 1) i = index + 1;
        else if (!swipe && loop) i = 0;
      } else if (i === 'prev') {
        if (index > 0) i = index - 1;
        else if (!swipe && loop) i = images.length - 1;
      }
      if (i < 0 || i > images.length - 1) return index;
      callback && callback(i);
      return i;
    });
  };

  if (!images.length) return null;

  return (
    <GallereactProvider value={{ ...props, index, goToSlide }}>
      <S_Gallery style={containerStyle}>
        <Slider />
        <Arrows />
      </S_Gallery>
      {displayPreview ? <Preview /> : <Dots />}
    </GallereactProvider>
  );
};

Gallereact.propTypes = {
  cover: PropTypes.bool.isRequired,
  loop: PropTypes.bool.isRequired,
  duration: PropTypes.bool.isRequired,
  swipe: PropTypes.bool.isRequired,
  autoPlay: PropTypes.bool.isRequired,
  displayPreview: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
  inputIndex: PropTypes.number.isRequired,
  containerStyle: PropTypes.object,
  images: PropTypes.array,
};

export default Gallereact;
