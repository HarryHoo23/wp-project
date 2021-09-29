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
  const { areas } = maps;
  const { setUnitMapIndex } = useGlobalContext();
  const clickHandler = (area, index, event) => {
    setUnitMapIndex(index);
    // let temp_state = [...areasMap];
    // let temp_element = { ...temp_state[index]};
    // temp_element.preFillColor = '';
    // temp_state[index] = temp_element;
    // setAreasMap(temp_state);

    // getNotionPage(area.name);
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
      // height = {height}
      onClick={clickHandler}
      // onImageMouseMove={(event) => moveOnImage(event)}
      // responsive={true}
      // parentWidth={width}
    />
  );
};

export default ImagePropertyMapper;
