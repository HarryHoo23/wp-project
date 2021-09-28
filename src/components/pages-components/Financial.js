import React from 'react';
import { Row, Nav, Col, Tab } from 'react-bootstrap';
import { financialContent } from '../../data/Content';
import Title from './Title';

const Financial = () => {

  return (
    <>
      <Row className='welcome-tabs financials'>
        <Tab.Container defaultActiveKey='first'>
          <Col md={4}>
            <Title
              colorClassName='white-title'
              firstHalfTitle='Welcome'
              secondHalfTitle='home.'
            />
            <Nav variant='pills' className='flex-column tabs-column'>
              {financialContent.map((tab, index) => {
                return (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={tab.position} className='welcome-title'>
                      {tab.name}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col md={8}>
            <Tab.Content>
              {financialContent.map(tab => {
                return (
                  <Tab.Pane key={tab.position} eventKey={tab.position}>
                    <p>{tab.name}</p>
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Tab.Container>
      </Row>
    </>
  );
};

export default Financial;
