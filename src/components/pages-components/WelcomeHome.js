import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Nav, Col, Tab } from 'react-bootstrap';
import { tabContent } from '../../data/Content';
import { areas_maps } from '../../data/Coordinates';
import ImagePropertyMapper from '../ImageMapper/ImagePropertyMapper';
import useWindowDimensions from '../../contexts/useWindowsDimension';
import Title from './Title';

const WelcomeHome = () => {
  const { width } = useWindowDimensions();

  let containerWidth = (width - 130) * 2 / 3 - 15;
    ;

  const [map, setMap] = useState(areas_maps[0]);

  function changeMap(index) {
    setMap(areas_maps[index]);
  }

  return (
    <>
      <Title
        colorClassName='white-title'
        firstHalfTitle='Welcome'
        secondHalfTitle='home.'
      />
      <Row className='welcome-tabs'>
        <Tab.Container defaultActiveKey='first'>
          <Col md={4}>
            <Nav variant='pills' className='flex-column tabs-column'>
              {tabContent.map((tab, index) => {
                return (
                  <Nav.Item key={index} onClick={() => changeMap(index)}>
                    <Nav.Link eventKey={tab.position} className='welcome-title'>
                      {tab.title}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col md={8}>
            <Tab.Content>
              {tabContent.map((tab) => {
                return (
                  <Tab.Pane key={tab.position} eventKey={tab.position}>
                    <p>{tab.content}</p>
                    <Link to={`/${tab.link}`}>View Option</Link>
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Tab.Container>
      </Row>
      <div className='wh-fp-container'>
        <ImagePropertyMapper width={containerWidth} maps={map} />
      </div>
    </>
  );
};

export default WelcomeHome;
