import React, { useState } from "react";
import { Row, Nav, Col, Tab } from "react-bootstrap";
import { financialContent, sitePlanData } from "../../data/Content";
import Title from "./Title";
import PriceList from "./FinancialTabs/PriceList";
import OwnersCoorporation from "./FinancialTabs/OwnersCooporation";
import FinancialModal from "./FinancialModal";
import DepreScheduleFinancial from "./FinancialTabs/DepreScheduleFinancial";
import EstimateOutgoingsFinancial from "./FinancialTabs/EstimateOutgoingsFinancial";
import useWindowDimensions from "../../contexts/useWindowsDimension";

const Financial = () => {

    const [showModal, setShowModal] = useState(false);
    const [number, setNumber] = useState(1);
    const { height } = useWindowDimensions();

    const onModalShow = (index) => {
        setShowModal(true);
        setNumber(index);
        window.fullpage_api.setAllowScrolling(false);
    }

    const onModalHide = () => {
        setShowModal(false);
        window.fullpage_api.setAllowScrolling(true);
    }

    const getDepreciationData = () => {
        let data = [];
        let unit = [];
        data = sitePlanData.map((item) => {
            return (
                item.data.map((item) => {
                    if (item.depreciation_schedule) {
                        return (Object.values(item.depreciation_schedule));
                    } else {
                        return null;
                    }
                })
            )
        }).flat(1);
        unit = sitePlanData.map((item) => {
            return (
                item.data.map((item) => {
                    if (item.unit_id !== "showroom") {
                        return item.unit_number;                        
                    } else {
                        return null;
                    }
                })
            )
        }).flat(1);
        
        return {data, unit};
    }   
    
    const getEstimatedOutgoingsData = () => {
        let data = [];
        let unit = [];
        data = sitePlanData.map((item) => {
            return (
                item.data.map((item) => {
                    if (item.estimated_outgoings) {
                        return (Object.values(item.estimated_outgoings));
                    } else {
                        return null;
                    }
                })
            )
        }).flat(1);
        unit = sitePlanData.map((item) => {
            return (
                item.data.map((item) => {
                    if (item.unit_id !== "showroom") {
                        return item.unit_number;                        
                    } else {
                        return null;
                    }
                })
            )
        }).flat(1);
        
        return {data, unit};
    }    

    const renderModalContent = () => {
        if (number === 1) {
            return (
                <>
                    <h2 className="text-center">Price List</h2>
                    <PriceList showFull={showModal} />
                </>
            );
        }
        if (number === 2) {
            return (
                <EstimateOutgoingsFinancial showFull={showModal} data={getEstimatedOutgoingsData()} />                
            )
        }
        if (number === 3) {
            return (
                <OwnersCoorporation showFull={showModal} />
            )
        }
        if (number === 4) {
            return (
                <DepreScheduleFinancial showFull={showModal} data={getDepreciationData()} />
            )
        }
    }

    return (
        <>
            <Row className="financials">
                <Tab.Container defaultActiveKey="first">
                    <Col lg={12} md={12}>
                        <Title
                            colorClassName=""
                            firstHalfTitle="Financials"
                            secondHalfTitle=""
                        />
                        <Nav variant="pills" className="tabs-column">
                            {financialContent.map((tab, index) => {
                                return (
                                    <Nav.Item key={index}>
                                        <Nav.Link
                                            eventKey={tab.position}
                                            className="welcome-title"
                                        >
                                            {tab.name}
                                        </Nav.Link>
                                    </Nav.Item>
                                );
                            })}
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <PriceList />                                
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <EstimateOutgoingsFinancial data={getEstimatedOutgoingsData()} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <OwnersCoorporation />                                
                            </Tab.Pane>
                            <Tab.Pane eventKey="forth">
                                <DepreScheduleFinancial data={getDepreciationData()} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Row>
            <FinancialModal onClose={onModalHide} show={showModal}>
                {renderModalContent()}
            </FinancialModal>
        </>
    );
};

export default Financial;
