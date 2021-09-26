import ImageMapper from 'react-image-mapper';
import React, { useEffect, useState } from 'react';

const moveOnImage = (evt) => {
  const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
  // console.log(coords);
};

const ImagePropertyMapper = ({ src, width, maps }) => {
  const [rerender, setRerender] = useState(false);
  // const clickHandler = (area, index, event) => {
  //   console.log(area);
  //   console.log(index);
  //   // getNotionPage(area.name);
  // };

  useEffect(() => {
    setRerender(!rerender);
  }, [maps]);

  return (
    <ImageMapper
      src={src}
      map={maps}
      width={width}
      imgWidth={1234}
      onImageMouseMove={(event) => moveOnImage(event)}
    />
  );
};

export default ImagePropertyMapper;
