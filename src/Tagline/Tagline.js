import React from 'react';
import PropTypes from 'prop-types';

import { S_Tagline, S_Title, S_Caption } from '../style.js';

function Tagline({ curr, taglineStyle, titleStyle, captionStyle }) {
  return curr.title || curr.caption ? (
    <S_Tagline style={taglineStyle}>
      <S_Title style={titleStyle}>{curr.title}</S_Title>
      <S_Caption style={captionStyle}>{curr.caption}</S_Caption>
    </S_Tagline>
  ) : null;
}
Tagline.propTypes = {
  curr: PropTypes.objectOf(PropTypes.strings).isRequired,
  taglineStyle: PropTypes.object.isRequired,
  titleStyle: PropTypes.object.isRequired,
  captionStyle: PropTypes.object.isRequired,
};

export default Tagline;
