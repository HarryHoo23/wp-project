import React from 'react';
import { Row, Nav, Col, Tab } from 'react-bootstrap';
import { financialContent } from '../../data/Content';
import Title from './Title';
import PriceList from './FinancialTabs/PriceList';
import EstOutgoings from './FinancialTabs/EstOutgoings';
import OwnersCoorporation from './FinancialTabs/OwnersCooporation';
import DepreSchedule from './FinancialTabs/DepreSchedule';
import InvestmentAnalysis from './FinancialTabs/InvestmentAnalysis';
import InvestmentPerformance from './FinancialTabs/InvestmentPerformance';

const Financial = () => {
  return (
    <>
      <Row className='financials'>
        <Tab.Container defaultActiveKey='first'>
          <Col md={3}>
            <Title
              colorClassName='white-title'
              firstHalfTitle='Financial.'
              secondHalfTitle=''
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
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <PriceList />
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
                <EstOutgoings />
              </Tab.Pane>
              <Tab.Pane eventKey='third'>
                <OwnersCoorporation />
              </Tab.Pane>
              <Tab.Pane eventKey='forth'>
                <DepreSchedule />
              </Tab.Pane>
              <Tab.Pane eventKey='fifth'>
                <InvestmentAnalysis />
              </Tab.Pane>
              <Tab.Pane eventKey='sixth'>
                <InvestmentPerformance />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </Row>
    </>
  );
};

export default Financial;
