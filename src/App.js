import React, { useState, useEffect } from 'react';

import Slider from './Slider'
import Spinner from './components/Spinner';
import CodeBlock from './components/CodeBlock';
import Checkboxes from './components/Checkboxes';


import { InputNumber } from 'antd';

import './App.sass';

import Unsplash, { toJson } from 'unsplash-js';
const unsplash = new Unsplash({
  applicationId: '856a49ae384c50aca5ecfcd61037378e4fceaa65b1914cc924a4c6cd3faa2ee7',
  secret: '9e81deea92517885ed3dfc73ef21c58c340ed9f444bf4a3d8c0c05141fa1f75b',
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
});

/**
   * Slider Component.
   * @prop { number } index - Input index to go to specific index.
   * @prop { number } duration - Duration for every slide - Deafult: 5000.
   * @prop { boolean } autoPlay - Slider auto play - Deafult: false.
   * @prop { boolean } loop - Slider will re-start from the beginnign - Deafult: true.
   * @prop { boolean } transition - Animated transition on change slide - Deafult: true.
   * @prop { boolean } cover - Image style, if false the applyed style is contain. - Deafult: true(cover).
   * @prop { boolean } invert - Dark or Light style - Deafult: false(light).
   * @prop { boolean } swipe - Allow Swipe action - Deafult: false(not allow).
   * @prop { boolean } arrowHover - Show on over - Deafult: false(shown).
   * @prop { object } containerStyle - Style to apply on the container.
   * @prop { object } slideStyle - Style to apply on the single slide.
   * @prop { object } captionStyle - Style to apply on the slide captions.
   * @prop { object } dotStyle - Style to apply on the dots.
   * @prop { object } arrowStyle - Style to apply on the arrows.
   * @prop { string } primary - Color to apply on the default dot - must be valid color ('black', '#000', rgb(0,0,0)).
   * @prop { string } secondary - Color to apply on the active dot - must be valid color ('black', '#000', rgb(0,0,0)).
   * @prop { url } arrowLeftImg - Image for the left arrow.
   * @prop { url } arrowRightImg - Image for the right arrow.
   * @prop { func } callback - Callback function on change slide @param { index }.
   * @prop { url[]! } images - Array of images.
   * @prop { string[]! } titles - Array of title for each image, if passed shouldn't be null.
   * @prop { string[]! } captions - Array of captions for each image, if passed shouldn't be null.
   */

const defaultState = {
  images: [], 
  authors: [], 
  descriptions: [], 
  index: 0, 
  swipe: false, 
  cover: true,
  arrowHover: false, 
  transition: true, 
  loop: true, 
  autoPlay: false, 
  titles: true, 
  captions: false, 
  duration: 5000,
  primary: '#CCCCCC',
  secondary: '#333333',
};

const style = {
  containerStyle: {
    width: '100%',
  },
  slideStyle: {
    width: '80%',
    height: '90%',
    margin: '5% 10%',
    boxShadow: '0 2px 20px -1px #2222',
    position: 'relative',
  },
  taglineStyle: {
    background: '#FFF',
  },
  titleStyle: {
    fontWeight: 800,
    fontSize: '1.2rem',
  },
  captionStyle: {
    fontWeight: 500,
    fontSize: '.8rem',
  },
  dotStyle: {
    width: '25px',
    height: '3px',
    borderRadius: 0,
    margin: '0px',
  },
}

const App = () => {
  const [state, setState ] = useState(defaultState)

  useEffect(() => {
    setState(state => ({...state, swipe:true}))
    unsplashPhotos('sea')
  }, []);

  const unsplashPhotos = topic => {
    unsplash.search.photos(topic, 1)
    .then(toJson)
    .then(({results}) => {
      if (results.length) {
        setState(state => ({
          ...state,
          images: [...state.images, ...results.map(img=> img.urls.regular)],
          authors: [...state.authors, ...results.map(img=> img.user.name)],
          descriptions: [...state.descriptions, ...results.map(img=> img.alt_description)],
        }))
      }
    }).catch((err)=>{
      console.error(err);
    });
  }

  const handleCheckbox = e => {
    const { value, checked } = e.target;
    setState(state => ({...state, [value]: checked}))
  }
  const handleIndex = e => {
    console.log('e', e);
  }

  const { index, swipe, cover, invert, arrowHover, transition, loop, autoPlay, primary, secondary, duration } = state;
  const { images, authors, descriptions, titles, captions, ...output } = state;
  return (
    <>
    <div className="navbar">
      <div className="title">GALLEREACT</div>
      <div className="payoff">Most custom slider ever</div>
    </div>
    <div className="container">
      { images.length && (<Slider
          {...style}
          images={images}
          titles={titles ? authors : []}
          captions={captions ? descriptions : []}
          {...{index, swipe, cover, invert, arrowHover, transition, loop, autoPlay, primary, secondary, duration}}
        /> ) || <Spinner/>}
      </div>
      <Checkboxes {...{swipe, cover, arrowHover, transition, loop, autoPlay, titles, captions, handleCheckbox}}  />
      <div className="colors">
        <label htmlFor="primary"> Primary <input onChange={({target})=>setState(state=>({...state, primary:target.value}))} type="color" value={primary} name="primary"/> </label>
        <label htmlFor="secondary"> Secondary <input onChange={({target})=>setState(state=>({...state, secondary:target.value}))} type="color" value={secondary} name="secondary"/> </label>
      </div>
      {/* <InputNumber min={0} max={images.length-1} defaultValue={1} onChange={handleIndex} /> */}
      {/* <label htmlFor="index">index <input type="number" name="index"/> </label>*/}
      {/* <label htmlFor="duration">duration <input type="range" min="1" max="10000" name="duration"/> </label>*/}
      <CodeBlock {...{ defaultState, style,...output}}/>
      <br/><br/><br/>
    </>
  );
}


export default App;
