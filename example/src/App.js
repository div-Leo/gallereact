import React, { useState, useEffect } from 'react';
import Gallereact from 'gallereact-dev';

import { filterImages, unsplashPhotos } from './utils';
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
  arrowOnHover: false,
  transition: true,
  loop: true,
  autoPlay: false,
  titles: true,
  captions: false,
  displayDot: true,
  displayArrows: true,
};

const defaultColors = {
  primaryColor: '#CCCCCC',
  secondaryColor: '#333333',
};

const defaultStyle = {
  containerStyle: '',
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
  captionStyle: '',
  dotStyle: {
    width: '25px',
    height: '3px',
    borderRadius: 0,
    margin: '0px',
  },
  arrowStyle: '',
};

const App = () => {
  const [images, setImages] = useState([]);
  const [checkboxOpts, setCheckboxOpts] = useState(defaultCheckboxes);
  const [colors, setColors] = useState(defaultColors);
  const [style, setStyle] = useState(defaultStyle);

  useEffect(() => {
    setCheckboxOpts(checkboxOpts => ({ ...checkboxOpts, swipe: true }));
    unsplashPhotos('sea').then(images => images && setImages(images));
  }, []);

  const { titles, captions } = checkboxOpts;
  return (
    <>
      <Navbar />
      <div className="slider_container">
        {images.length ? (
          <Gallereact
            images={filterImages(images, titles, captions)}
            {...style}
            {...colors}
            {...checkboxOpts}
          />
        ) : (
          <Spinner />
        )}
      </div>
      <div className="settings_container">
        <h1>Booleans</h1>
        <CheckboxList {...{ checkboxOpts, setCheckboxOpts }} />
        <h1>Colors</h1>
        <ColorPicker {...{ colors, setColors }} />
        <h1>Styles</h1>
        <CodeEditorList {...{ style, setStyle }} />
        <h1>Output code</h1>
        <CodeBlock {...{ defaultCheckboxes, defaultColors, style, checkboxOpts, colors }} />
      </div>
    </>
  );
};

export default App;
