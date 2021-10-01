import React, { useState } from 'react';
import { Card, Button, Accordion, Row, Col } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import { google_map_data, locationAccordion } from '../../data/MapData';

const AnyReactComponent = ({ text, src }) => <div>{text}<img src={src} /></div>;

const Map = () => {
  const [center, setCenter] = useState({ lat: -37.84075, lng: 145.00199 });
  const [zoom, setZoom] = useState(16);

  console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
  // const [activeMarker, setActiveMarker] = useState(null);

  // useEffect(() => {
  //   googleMap = initGoogleMap();
  //   var bounds = new window.google.maps.LatLngBounds();
  //   markerList.map((x) => {
  //     const marker = createMarker(x);
  //     bounds.extend(marker.position);
  //   });
  //   googleMap.fitBounds(bounds); // the map to contain all markers
  // }, []);

  // const handleActiveMarker = (marker) => {
  //   if (marker === activeMarker) {
  //     return;
  //   }
  //   setActiveMarker(marker);
  // };

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
        >
          {google_map_data.loactions_coordinates.map((marker, index) => {
            return (
              <AnyReactComponent
                key={index}
                lat={marker.position.lat}
                lng={marker.position.lng}
                text='My Marker'
                src={marker.type}
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
