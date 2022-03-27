import React, { useState } from 'react';
import { Card, Button, Accordion, Row, Col } from 'react-bootstrap';

import Title from './Title';

const DoorStepAccordion = ({direction, second_direction, data, title}) => {
  const [image, setImage] = useState(data[0].image);
  console.log(data);
  if (direction && data) {
    if (direction === 'right') {
      return (
        <Row className='doorstep-container-mid'>
          <Col
            md={8}
            className={`dp-container-${second_direction}`}
            style={{ backgroundImage: `url(${data[0].image})` }}
          ></Col>
          <Col md={4}>
            <Title
              colorClassName='ds-title'
              firstHalfTitle={title}
              secondHalfTitle=''
            />
            <div className={`doorstep-accordion-box ${direction}`}>
              <Accordion defaultActiveKey='0'>
                {data.map((card, index) => {
                  return (
                    <Card key={index}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant='link' eventKey={`${index}`}
                        className="accordion-btn" onClick={() => setImage(card.image)}>
                          {card.title}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={`${index}`}>
                        <Card.Body>
                          <p dangerouslySetInnerHTML={{__html: card.content}}></p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  )
                })}
              </Accordion>
            </div>
          </Col>
        </Row>
      );
    }
    
    if (direction === 'left') {
      return (
        <Row className='doorstep-container-mid'>
        <Col md={4}>
          <Title
            colorClassName='ds-left-title'
            firstHalfTitle={title}
            secondHalfTitle=''
          />
          <div className={`doorstep-accordion-box ${direction}`}>
            <Accordion defaultActiveKey='0'>
              {data.map((card, index) => {
                  return (
                    <Card key={index}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant='link' eventKey={`${index}`}
                        className="accordion-btn" onClick={() => setImage(card.image)}>
                          {card.title}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={`${index}`}>
                        <Card.Body>
                          <p dangerouslySetInnerHTML={{__html: card.content}}></p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  )
                })}
            </Accordion>
          </div>
        </Col>
        <Col
          md={8}
          className={`dp-container-${second_direction}`}
          style={{ backgroundImage: `url(${image})` }}
        ></Col>
      </Row>
      )
    }
  }
};

export default DoorStepAccordion;
