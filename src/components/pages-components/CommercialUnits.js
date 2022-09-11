import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { areas_maps } from "../../data/Coordinates";
import { useGlobalContext } from "../../contexts/GlobalContext";
import ImagePropertyMapper from "../ImageMapper/ImagePropertyMapper";
import useWindowDimensions from "../../contexts/useWindowsDimension";
import Title from "./Title";
import CommercialDropdown from "./CommercialDropDown";

const CommercialUnits = () => {
    const { width } = useWindowDimensions();
    const history = useHistory();

    let containerWidth = width - 160;

    const { unitData, mapIndex, setUnitMapIndex } = useGlobalContext();    

    const [map, setMap] = useState(areas_maps[mapIndex]);

    const changeMap = () => {
        setMap(areas_maps[mapIndex]);
    };

    useEffect(() => {
        changeMap();
        // eslint-disable-next-line
    }, [mapIndex]);    

    const handleClickViewOptions = (e) => {
        e.preventDefault();
        history.push(`/${unitData.link}`);
        setUnitMapIndex(0);
    }
    
    if (unitData) {
        return (
            <>
                <Row className="welcome-tabs" id="commercial-welcome-tabs">
                    <Col lg={3} className="d-flex" style={{flexDirection: 'column'}}>
                        <Title
                            colorClassName="title"
                            firstHalfTitle={unitData.first_half_title}
                            secondHalfTitle={unitData.second_half_title}
                        />         
                        <CommercialDropdown />
                        <a href="#" className="view-option btn" onClick={(e) => handleClickViewOptions(e)}>
                            View Options
                        </a>
                    </Col>
                    <Col lg={5}>
                        <div className="tab-contents">
                            <h3 className="color-white mb-3">{unitData.subtitle}</h3>
                            <p>{unitData.content}</p>                        
                        </div>
                    </Col>
                    <Col lg={4}>
                        {/* eslint-disable-next-line */}
                        <div className="tab-contents features-list">
                            <h3 className="mb-3">Features</h3>
                            <ul className="p-0 m-0 margin-block-0">
                                {unitData.list.map((item, key) => {
                                    return (
                                        <li key={key}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="wh-fp-container">
                            <ImagePropertyMapper
                                width={containerWidth}
                                maps={map}
                                destination={unitData.link}
                                isSitePlan={true}
                                image={unitData.img}
                            />
                        </div>
                    </Col>
                </Row>
            </>
        );     
    } else {
        return ""
    }
    
};

export default CommercialUnits;
