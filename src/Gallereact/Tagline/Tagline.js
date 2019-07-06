import React from 'react';
import PropTypes from 'prop-types';

import * as s from '../style.js';

function Tagline({ curr, taglineStyle, titleStyle, captionStyle }) {
  return curr.title || curr.caption ? (
    <s.Tagline style={taglineStyle}>
      <s.Title style={titleStyle}>{curr.title}</s.Title>
      <s.Caption style={captionStyle}>{curr.caption}</s.Caption>
    </s.Tagline>
  ) : null;
}
Tagline.propTypes = {
  curr: PropTypes.objectOf(PropTypes.strings).isRequired,
  taglineStyle: PropTypes.object.isRequired,
  titleStyle: PropTypes.object.isRequired,
  captionStyle: PropTypes.object.isRequired,
};

export default Tagline;
