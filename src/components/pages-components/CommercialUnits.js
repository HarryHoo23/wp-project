import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Nav, Col, Tab } from 'react-bootstrap';
import { tabContent } from '../../data/Content';
import { areas_maps } from '../../data/Coordinates';
import ImagePropertyMapper from '../ImageMapper/ImagePropertyMapper';
import useWindowDimensions from '../../contexts/useWindowsDimension';
import Title from './Title';

const CommercialUnits = () => {
  const { width } = useWindowDimensions();

  let containerWidth = (width - 130) * 3 / 4 - 30;
    ;

  const [map, setMap] = useState(areas_maps[0]);
  const [destination, setDestination] = useState(tabContent[0].link);

  function changeMap(index) {
    setMap(areas_maps[index]);
    setDestination(tabContent[index].link);
  }

  return (
    <>
      <Row className='welcome-tabs'>
        <Tab.Container defaultActiveKey='first'>
          <Col md={3}>
            <Title
              colorClassName='white-title'
              firstHalfTitle='Commercial'
              secondHalfTitle='Units.'
            />
            <Nav variant='pills' className='flex-column tabs-column'>
              {tabContent.map((tab, index) => {
                return (
                  <Nav.Item key={index}>
                    <Nav.Link
                      eventKey={tab.position}
                      className='welcome-title'
                      onClick={() => changeMap(index)}
                    >
                      {tab.title}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col md={6}>
            <Tab.Content>
              {tabContent.map((tab) => {
                return (
                  <Tab.Pane key={tab.position} eventKey={tab.position}>
                    <p>{tab.content}</p>
                    {/* <Link to={`/${tab.link}`} className='view-option btn'>
                      View Option
                    </Link> */}
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Tab.Container>
        <Col md={3}>
          <Link to={`/${destination}`} className='view-option btn'>
            View Options
          </Link>
        </Col>
      </Row>
      <div className='wh-fp-container'>
        <ImagePropertyMapper width={containerWidth} maps={map} />
      </div>
    </>
  );
};

export default CommercialUnits;
