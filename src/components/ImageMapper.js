import ImageMapper from 'react-img-mapper';
import React, {useState} from 'react';
import { sitePlanData } from '../data/Content';
import { Col, Row } from 'react-bootstrap';

export const mapImg =
  'https://images.unsplash.com/photo-1632283574446-939bea777fff?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';



// const moveOnImage = (evt) => {
//   const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
//   console.log(JSON.stringify(coords));
// }

const Mapper = (props) => {
  const [data, setData] = useState(sitePlanData[0]);

  const clickHandler = (area, index, event) => {
    console.log(area);
    console.log(index);
    setData(sitePlanData[index]);
    // getNotionPage(area.name);
  };

  return (
    <Row>
      <Col md={8}>
        <ImageMapper
          src={mapImg}
          imgWidth={800}
          onClick={clickHandler}
          // onImageMouseMove={(event) => moveOnImage(event)}
          map={{
            name: 'fw-map',
            areas: [
              {
                name: '1',
                shape: 'poly',
                coords: [
                  718, 679, 718, 497, 677, 438, 697, 391, 748, 387, 807, 428,
                  860, 454, 806, 524,
                ],
                fillColor: 'blue',
                polygon: [
                  [718, 679],
                  [718, 479],
                  [677, 438],
                  [697, 391],
                  [748, 387],
                  [807, 428],
                  [860, 454],
                  [806, 524],
                ],
              },
              {
                name: '2',
                shape: 'poly',
                coords: [219, 118, 220, 210, 283, 210, 284, 119],
                fillColor: 'pink',
              },
              {
                name: '3',
                shape: 'poly',
                coords: [381, 241, 383, 94, 462, 53, 457, 282],
                fillColor: 'yellow',
              },
              {
                name: '4',
                shape: 'poly',
                coords: [245, 285, 290, 285, 274, 239, 249, 238],
                preFillColor: 'red',
              },
              {
                name: '5',
                shape: 'circle',
                coords: [170, 100, 25],
                preFillColor: 'red',
              },
            ],
          }}
        />
      </Col>
      <Col md={4}>
        <p>
          {data.unit_number}
        </p>
      </Col>
    </Row>
  );
};

export default Mapper;
