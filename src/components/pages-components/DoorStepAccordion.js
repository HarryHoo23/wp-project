import React, { useState } from 'react';
import { Card, Button, Accordion, Row, Col } from 'react-bootstrap';
import img1 from '../../assests/img/doorstep/abacus.jpg';
import img2 from '../../assests/img/doorstep/atlas.jpg';
import img3 from '../../assests/img/doorstep/barrys.jpg';
import img4 from '../../assests/img/doorstep/tivoli.jpg';

const DoorStepAccordion = () => {
  const [image, setImage] = useState(img1);

  return (
    <Row className='doorstep-container-mid'>
      <Col
        md={8}
        className={`dp-container-left`}
        id='slow-start'
        style={{ backgroundImage: `url(${image})` }}
      ></Col>
      <Col md={4}>
        <div className='doorstep-accordion-box right'>
          <div className='dp-container-title'>
            <p>
              A SLOW START, <br /> OR FAST HEART RATE - <br /> IT’S YOUR CHOICE
            </p>
          </div>

          <Accordion defaultActiveKey='0'>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant='link'
                  eventKey='0'
                  className='accordion-btn'
                  onClick={() => setImage(img1)}
                >
                  Barry’s Bootcamp
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='0' id='doorstep-collapseOne'>
                <Card.Body>
                  With the likes of David Beckham, Harry Styles and Jessica Alba
                  worshiping at its altar, Barry’s is a cult 55-minute
                  high-intensity interval training workout straight out of
                  Hollywood — God help us. Dipping your toe in for the first
                  time? Interested in breaking a sweat without breaking the
                  bank? Ask for the $75.00 First Timer 3 Class Pack.
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant='link'
                  eventKey='1'
                  className='accordion-btn'
                  onClick={() => setImage(img2)}
                >
                  Tivoli Road Bakery
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                  Bread might be the name of the game at Tivoli Road Bakery, but
                  anything from their buttery croissants to flaky sausage rolls
                  certainty has our name written all over it. And as for their
                  infamous hot cross buns, well, they certainty can’t be missed
                  — and to ensure that you don’t, be sure to get in early.
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant='link'
                  eventKey='2'
                  className='accordion-btn'
                  onClick={() => setImage(img3)}
                >
                  Gilson
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey='2'>
                <Card.Body>
                  One for everyone, Gilson does a brunch with your parents, a
                  date, a catch-up with friends or a moment of solitude. On the
                  menu is exactly what you’d expect from Jamie McBride, the
                  creative genius behind Melbourne’s beloved Mammoth, Touchwood
                  and Barry. Whilst you’re there, capitalise on the kitchen’s
                  wood-fired oven with charred eggplant for breakfast or one of
                  two pizzettas — as they say, when in Melbourne.
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant='link'
                  eventKey='3'
                  className='accordion-btn'
                  onClick={() => setImage(img4)}
                >
                  Abacus
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey='3'>
                <Card.Body>
                  From Tim Tams for breakfast to freshly baked bread made from
                  flour that’s been milled in-house — there’s a lot under the
                  one 7.5 metre roof at Abacus. The bar might be high, but
                  Abacus does not disappoint with a menu that’s almost
                  exclusively sourced from the neighbouring Prahran Market. Even
                  those with a savoury tooth won’t be able to resist the
                  in-house honeycomb — sustainably produced from local bees who
                  call Abacus’ roof, home.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Col>
    </Row>
  );
};

export default DoorStepAccordion;
