import React, { useState, useEffect } from 'react';
import { Card, Button, Accordion, Row, Col } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import { google_map_data, locationAccordion } from '../../data/MapData';

const AnyReactComponent = ({ src, info, show, click }) => (
  <div
    style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
    onClick={click}
  >
    {show && <div className='info-window'>{info}</div>}
    <img src={src} alt="marker" />
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
      <Col md={4} className='h-100'>
        <p className='floor-plan-title'>OUT AND ABOUT</p>
        <Accordion defaultActiveKey='0' id='map-accordion'>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant='link'
                eventKey='0'
                className='btn-block collapsed text-left'
              >
                Sunday Morning
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey='0'>
              <Card.Body className='text-left'>
                <ul>
                  {locationAccordion.sunday_morning.map((item, index) => {
                    return (
                      <li className='zoomIn' key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant='link'
                eventKey='1'
                className='btn-block collapsed text-left'
              >
                Sunday Service
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey='1'>
              <Card.Body className='text-left'>
                <ul>
                  {locationAccordion.sunday_service.map((item, index) => {
                    return (
                      <li className='zoomIn' key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant='link'
                eventKey='2'
                className='btn-block collapsed text-left'
              >
                Sunday Sweat
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey='2'>
              <Card.Body className='text-left'>
                <ul>
                  {locationAccordion.sunday_sweat.map((item, index) => {
                    return (
                      <li className='zoomIn' key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant='link'
                eventKey='3'
                className='btn-block collapsed text-left'
              >
                Sunday Market
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey='3'>
              <Card.Body className='text-left'>
                <ul>
                  {locationAccordion.sunday_market.map((item, index) => {
                    return (
                      <li className='zoomIn' key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant='link'
                eventKey='4'
                className='btn-block collapsed text-left'
              >
                Sunday Best
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey='4'>
              <Card.Body className='text-left'>
                <ul>
                  {locationAccordion.sunday_best.map((item, index) => {
                    return (
                      <li className='zoomIn' key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant='link'
                eventKey='5'
                className='btn-block collapsed text-left'
              >
                Sunday Service
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey='5'>
              <Card.Body className='text-left'>
                <ul>
                  {locationAccordion.sunday_service.map((item, index) => {
                    return (
                      <li className='zoomIn' key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
      <Col md={8} className='h-100'>
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
