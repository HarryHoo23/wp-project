import ImageMapper from 'react-image-mapper';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';

// const moveOnImage = (evt) => {
//   const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
//   // console.log(coords);
// };

const ImagePropertyMapper = ({ src, width, maps }) => {
  const [rerender, setRerender] = useState(false);
  const { areas } = maps;
  const [areasMap, setAreasMap] = useState(areas);
  const { setUnitMapIndex } = useGlobalContext();
  const clickHandler = (area, index, event) => {
    setUnitMapIndex(index);
    let temp_state = [...areasMap];
    let temp_element = { ...temp_state[index]};
    temp_element.preFillColor = '';
    temp_state[index] = temp_element;
    setAreasMap(temp_state);

    // getNotionPage(area.name);
  };


  console.log(areasMap);
  let MAP = {
    name: 'name',
    areas
  }
  useEffect(() => {
    setRerender(!rerender);
    // eslint-disable-next-line
  }, [maps]);

  return (
    <ImageMapper
      src={src}
      map={MAP}
      width={width}
      imgWidth={1234}
      onClick={clickHandler}
      // onImageMouseMove={(event) => moveOnImage(event)}
    />
  );
};

export default ImagePropertyMapper;
