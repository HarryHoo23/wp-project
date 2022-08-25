import React from 'react';
import ImageGallery from 'react-image-gallery';

const ImageGallary = (props) => {
  return (
    <ImageGallery
      items={props.list}
      showThumbnails={false}
      showBullets={true}
      showNav={true}
      showPlayButton={false}
    />
  );
};

export default ImageGallary;
