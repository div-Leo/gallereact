import React, { useContext } from 'react';
import GallereactConsumer from '../GallereactContext'

import Arrow from './Arrow';

import * as s from '../style.js';

const Arrows = () => {
  const {
    arrowStyle,
    arrowHover=false,
    primaryColor='#CCC',
    arrowLeftImg,
    arrowRightImg,
    goToPreviousSlide,
    goToNextSlide,
    swipe=false,
    images,
    index,
    loop=!props.swipe,
  } = useContext(GallereactConsumer)

  return !swipe && ( 
    <s.Arrows>
      {(loop || index > 0)
        ? <Arrow {...{arrowStyle, arrowImg: arrowLeftImg, arrowHover, callToAction: goToPreviousSlide, primaryColor, direction: 'left'}}/>
        : <div/>}
      { (loop || index < images.length-1) 
        ? <Arrow {...{arrowStyle, arrowImg: arrowRightImg, arrowHover, callToAction: goToNextSlide, primaryColor, direction: 'right'}}/>
        : <div/>}
    </s.Arrows>
  )
}

export default Arrows;