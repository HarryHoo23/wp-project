import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { areas_maps } from "../../data/Coordinates";
import { useGlobalContext } from "../../contexts/GlobalContext";
import ImagePropertyMapper from "../ImageMapper/ImagePropertyMapper";
import useWindowDimensions from "../../contexts/useWindowsDimension";
import Title from "./Title";
import CommercialDropdown from "./CommercialDropDown";
import floorplanImg from "../../assests/img/floorplan/1.png";

const CommercialUnits = () => {
    const { width } = useWindowDimensions();

    let containerWidth = width - 160;

    const { unitData } = useGlobalContext();    

    const [map, setMap] = useState(areas_maps[0]);

    const changeMap = (index) => {
        setMap(areas_maps[index]);
    };
    
    if (unitData) {
        return (
            <>
                <Row className="welcome-tabs">
                    <Col md={3}>
                        <Title
                            colorClassName="white-title"
                            firstHalfTitle="Commercial"
                            secondHalfTitle="units"
                        />         
                        <CommercialDropdown />
                    </Col>
                    <Col md={6}>
                        <div className="tab-contents">
                            <h3 className="color-white mb-3">{unitData.subtitle}</h3>
                            <p>{unitData.content}</p>                        
                        </div>
                    </Col>
                    <Col md={3}>
                        <Link to={`/${unitData.link}`} className="view-option btn">
                            View Options
                        </Link>
                    </Col>
                </Row>
                <div className="wh-fp-container">
                    <ImagePropertyMapper
                        width={containerWidth}
                        maps={map}
                        destination={unitData.link}
                        image={floorplanImg}
                    />
                </div>
            </>
        );     
    } else {
        return ""
    }
    
};

export default CommercialUnits;
