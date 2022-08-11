import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import { google_map_data } from '../../data/MapData';

const AnyReactComponent = ({ src, info, show, click }) => (
  <div
    style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
    onClick={click}
  >
    {show && <div className='info-window'>{info}</div>}
    <img className="marker-icon" src={src} alt="marker" />
  </div>
);

const Map = () => {
  const [center, setCenter] = useState({ lat: -37.84075, lng: 145.00199 });
  const [zoom, setZoom] = useState(16);
  const [isShow, SetIsShow] = useState(google_map_data.loactions_coordinates);

  function toggleMarker (index) {
    let tempState = [...isShow];
    let temp_element = { ...tempState[index] };
    temp_element.show = !temp_element.show;
    tempState[index] = temp_element;
    SetIsShow(tempState)
  }

  const changeMapCenter = () => {
    let mapButtonList = document.getElementsByClassName('zoomIn');
    for (let i = 0; i < mapButtonList.length; i++) {
      mapButtonList[i].addEventListener('click', () => {
        let centerPosition = google_map_data.loactions_coordinates[i].position;
        console.log(centerPosition);
        setCenter(centerPosition);
        setZoom(20);
        toggleMarker(i);
      });
    }
  }

  useEffect(() => {
    changeMapCenter();
    // eslint-disable-next-line
  }, []);

  return (
    <Row className='h-100'>
      <Col md={12} className='h-100 w-100'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
          center={center}
          zoom={zoom}
          options={{ styles: google_map_data.mapStyle }}
        >
          {google_map_data.loactions_coordinates.map((marker, index) => {
            return (
              <AnyReactComponent
                key={index}
                lat={marker.position.lat}
                lng={marker.position.lng}
                src={marker.type}
                info={google_map_data.locationAddress[index]}
                show={isShow[index].show}
                click={() => toggleMarker(index)}
              />
            );
          })}
        </GoogleMapReact>
        );
      </Col>
    </Row>
  );
};

export default Map;
