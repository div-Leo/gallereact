import React, { useState, useEffect } from 'react';
import Gallereact from 'gallereact';

import { filterImages, unsplashPhotos } from "./utils";
import {
  CheckboxList,
  CodeBlock,
  CodeEditorList,
  ColorPicker,
  Navbar,
  Spinner,
} from './components';

import './App.sass';

const defaultCheckboxes = {
  swipe: false, 
  cover: true,
  arrowHover: false, 
  transition: true, 
  loop: true, 
  autoPlay: false, 
  titles: true,
  captions: false
};

const defaultColors = {
  primaryColor: '#CCCCCC',
  secondaryColor: '#333333',
};
  
const defaultStyle = {
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
  arrowStyle:''
}

const App = () => {
  const [images, setImages] = useState([])
  const [checkboxOpts, setCheckboxOpts] = useState(defaultCheckboxes)
  const [colors, setColors] = useState(defaultColors)
  const [style, setStyle ] = useState(defaultStyle)

  useEffect(() => {
    setCheckboxOpts(checkboxOpts => ({...checkboxOpts, swipe:true}))
    unsplashPhotos('sea')
      .then(images => setImages(images));
  }, []);

  const { titles, captions }  = checkboxOpts;

  return (
    <>
      <Navbar/>
      <div className="slider_container">
        { images.length ?
          <Gallereact
            images={filterImages(images, titles, captions)}
            {...style}
            {...checkboxOpts}
            {...defaultColors}
          /> 
          : <Spinner/>}
      </div>
    <div className="settings_container">
      <CheckboxList {...{checkboxOpts, setCheckboxOpts}} />
      <ColorPicker {...{colors, setColors}} />
      <CodeEditorList {...{style, setStyle}}/>
      {/* <CodeBlock {...{ defaultCheckboxes, style, checkboxOpts}} /> */}
    </div>
    </>
  );
}


export default App;
