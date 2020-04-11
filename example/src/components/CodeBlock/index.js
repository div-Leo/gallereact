import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import './lightSyntax.css';

const CodeBlock = ({ defaultCheckboxes, defaultColors, style, checkboxOpts, colors }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  const galleryOptions = Object.entries({ ...checkboxOpts, ...colors }).reduce(
    (acc, [property, value]) => {
      if (!(value !== defaultCheckboxes[property] && value !== defaultColors[property])) return acc; // color
      return acc + `\n  ${property}={${value[0] === '#' ? JSON.stringify(value) : value}} `;
    },
    '',
  );

  const stylesOptions = Object.entries(style).reduce((acc, [className, options]) => {
    if (className === 'outerStyle') return acc;
    if (Object.keys(options).length) {
      acc += `\n  ${className}={${JSON.stringify(options).replace(/"([^(")"]+)":/g, '$1:')}} `;
    }
    return acc;
  }, '');

  const codeOutput = `<Slider\n  images={[/* array of images */]} ${galleryOptions}${stylesOptions} \n/>`;

  return (
    <div className="codeBlock_title">
      <pre>
        <code className="language-jsx">{codeOutput}</code>
      </pre>
    </div>
  );
};

CodeBlock.propTypes = {
  defaultCheckboxes: PropTypes.objectOf(PropTypes.any).isRequired,
  defaultColors: PropTypes.objectOf(PropTypes.any).isRequired,
  style: PropTypes.objectOf(PropTypes.any).isRequired,
  checkboxOpts: PropTypes.objectOf(PropTypes.any).isRequired,
  colors: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CodeBlock;
