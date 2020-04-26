import React, { useState, useEffect } from 'react';
import Gallereact from 'gallereact-dev';

import { filterImages, filterStyle, unsplashPhotos, options } from './utils';
import {
  CheckboxList,
  CodeBlock,
  CodeEditorList,
  ColorPicker,
  Navbar,
  Spinner,
  Options,
  Footer,
} from './components';

import './App.sass';

const defaultCheckboxes = {
  swipe: false,
  cover: true,
  arrowOnHover: false,
  transition: true,
  loop: true,
  autoPlay: false,
  titles: false,
  captions: false,
  preview: false,
  displayDot: true,
  displayArrows: true,
};

const defaultColors = {
  primaryColor: '#CCCCCC',
  secondaryColor: '#333333',
};

const App = () => {
  const [option, setOption] = useState(1);
  const { defaultStyle, checkboxes } = options[option];

  const [images, setImages] = useState([]);
  const [checkboxOpts, setCheckboxOpts] = useState({ ...defaultCheckboxes, ...checkboxes });
  const [colors, setColors] = useState(defaultColors);
  const [style, setStyle] = useState(defaultStyle);

  useEffect(() => {
    unsplashPhotos('italy').then(images => images && setImages(images));
  }, []);

  useEffect(() => {
    setCheckboxOpts({ ...defaultCheckboxes, ...checkboxes });
    setStyle({ ...defaultStyle });
  }, [option]);

  const { titles, captions } = checkboxOpts;

  return (
    <>
      <Navbar />
      <div className="slider_container" style={style.outerStyle}>
        {images.length ? (
          <Gallereact
            images={filterImages(images, titles, captions)}
            {...filterStyle(style)}
            {...colors}
            {...checkboxOpts}
          />
        ) : (
          <Spinner />
        )}
      </div>
      <div className="descrpition_container">
        <h1>Gallereact</h1>
        <p>
          {' '}
          Here you have a playground to try out all the possible customizations availables for
          gallereact. <br /> Set the options you prefer then at the bottom of the page you can copy
          your custom code snippet. <br /> For getting started check out the npm package{' '}
          <a href="https://www.npmjs.com/package/gallereact">gallereact</a>
        </p>
      </div>
      <div className="settings_container">
        <h1>Options</h1>
        <Options {...{ setOption, option, options }} />
        <h1>Booleans</h1>
        <CheckboxList {...{ checkboxOpts, setCheckboxOpts }} />
        <h1>Colors</h1>
        <ColorPicker {...{ colors, setColors }} />
        <h1>Styles</h1>
        <CodeEditorList {...{ style, setStyle, defaultStyle }} />
        <h1>Output code</h1>
        <CodeBlock {...{ defaultCheckboxes, defaultColors, style, checkboxOpts, colors }} />
      </div>
      <Footer />
    </>
  );
};

export default App;
