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
                <Row className="welcome-tabs">
                    <Col lg={3} className="d-flex" style={{flexDirection: 'column'}}>
                        <Title
                            colorClassName="title"
                            firstHalfTitle={unitData.first_half_title}
                            secondHalfTitle={unitData.second_half_title}
                        />         
                        <CommercialDropdown />
                    </Col>
                    <Col lg={6}>
                        <div className="tab-contents">
                            <h3 className="color-white mb-3">{unitData.subtitle}</h3>
                            <p>{unitData.content}</p>                        
                        </div>
                    </Col>
                    <Col lg={3}>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="view-option btn" onClick={(e) => handleClickViewOptions(e)}>
                            View Options
                        </a>
                    </Col>
                </Row>
                <div className="wh-fp-container">
                    <ImagePropertyMapper
                        width={containerWidth}
                        maps={map}
                        destination={unitData.link}
                        isSitePlan={true}
                        image={unitData.img}
                    />
                </div>
            </>
        );     
    } else {
        return ""
    }
    
};

export default CommercialUnits;
