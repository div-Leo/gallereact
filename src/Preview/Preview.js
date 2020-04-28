import React, { useContext } from 'react';
import GallereactConsumer from '../GallereactContext';

import { S_PreviewContainer, S_Preview } from '../style.js';

const Preview = () => {
  const {
    index,
    images,
    goToSlide,
    previewStyle,
    previewActiveStyle,
    displayPreview = true,
    primaryColor = '#CCC',
  } = useContext(GallereactConsumer);

  const handlePreviewClick = i => {
    i === index || goToSlide(i);
  };
  console.log('previewActiveStyle', previewActiveStyle);
  const activeStyle = Object.assign({}, previewStyle, previewActiveStyle);

  return (
    <S_PreviewContainer displayPreview={displayPreview}>
      {images.map((image, id) => (
        <S_Preview
          key={id}
          style={id === index ? activeStyle : previewStyle}
          active={id === index}
          length={images.length}
          image={image.image}
          color={primaryColor}
          onClick={handlePreviewClick.bind(null, id)}
        />
      ))}
    </S_PreviewContainer>
  );
};

export default Preview;
