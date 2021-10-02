import ImageMapper from 'react-image-mapper';
import React, { useEffect, useState } from 'react';
import floorplanImg from '../../assests/img/floorplan/Example-1.jpg';


// const moveOnImage = (evt) => {
//   //const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
//   console.log(evt);
// };

const ImagePropertyMapper = ({ maps, width }) => {
  const [rerender, setRerender] = useState(false);
  // const clickHandler = (area, index, event) => {
  //   console.log(area);
  //   console.log(index);
  //   // getNotionPage(area.name);
  // };
  
  useEffect(() => {
    setRerender(!rerender);
    // eslint-disable-next-line
  }, [maps]);

  return (
    <ImageMapper
      src={floorplanImg}
      map={maps}
      width={width}
      imgWidth={1980}
      // onImageMouseMove={(event) => moveOnImage(event)}
    />
  );
};

export default ImagePropertyMapper;
