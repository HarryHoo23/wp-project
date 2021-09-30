//import ImageMapper from 'react-image-mapper';
import ImageMapper from 'react-img-mapper';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';

// const moveOnImage = (evt) => {
//   const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
//   // console.log(coords);
// };

const ImagePropertyMapper = ({ src, width, maps, height }) => {
  const [rerender, setRerender] = useState(false);
  const { setUnitMapIndex } = useGlobalContext();
  const clickHandler = (area, index, event) => {
    setUnitMapIndex(index);
  };

  useEffect(() => {
    setRerender(!rerender);
    // eslint-disable-next-line
  }, [maps]);

  return (
    <ImageMapper
      src={src}
      map={maps}
      width={width}
      stayHighlighted={true}
      // width={width}
      imgWidth={1234}
      onClick={clickHandler}
      // onImageMouseMove={(event) => moveOnImage(event)}
      // responsive={true}
      // parentWidth={width}
    />
  );
};

export default ImagePropertyMapper;
