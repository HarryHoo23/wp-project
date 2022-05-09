import ImageMapper from 'react-image-mapper';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/GlobalContext';

// eslint-disable-next-line
const moveOnImage = (evt) => {
    //const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
};

const ImagePropertyMapper = ({ maps, width, destination, image, isSitePlan }) => {
  const [rerender, setRerender] = useState(false);
  const history = useHistory();
  
  const { setUnitMapIndex } = useGlobalContext();
    
  const clickHandler = (area, index, event) => {
    history.push(`/${destination}`);
  };
    
  const clickNewHandler = (area, index) => {
    setUnitMapIndex(index)
  };
  
  useEffect(() => {
    setRerender(!rerender);
    // eslint-disable-next-line
  }, [maps]);

  return (
    <ImageMapper
      src={image}
      map={maps}
      width={width}
      imgWidth={1466}
      onClick={!isSitePlan ? clickHandler : clickNewHandler}
      //onImageMouseMove={(event) => moveOnImage(event)}
    />
  );
};

export default ImagePropertyMapper;
