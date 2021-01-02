import React from 'react';
import PropTypes from 'prop-types';

import { S_Arrow, S_ArrowIcon } from '../style.js';

const Arrow = ({
  callToAction,
  direction,
  arrowStyle,
  arrowAreaStyle,
  displayArrows,
  arrowOnHover,
  arrowImg,
  primaryColor,
}) => {
  return (
    <S_Arrow
      style={arrowAreaStyle}
      direction={direction}
      hover={arrowOnHover}
      onClick={callToAction}
    >
      {arrowImg ? (
        <img src={arrowImg} style={arrowStyle} alt="" />
      ) : (
        <S_ArrowIcon
          displayArrows={displayArrows}
          direction={direction}
          style={arrowStyle}
          primaryColor={primaryColor}
        ></S_ArrowIcon>
      )}
    </S_Arrow>
  );
};

Arrow.propTypes = {
  callToAction: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  arrowStyle: PropTypes.object.isRequired,
  arrowAreaStyle: PropTypes.object.isRequired,
  displayArrows: PropTypes.bool.isRequired,
  arrowOnHover: PropTypes.bool.isRequired,
  arrowImg: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
};

export default React.memo(Arrow);
