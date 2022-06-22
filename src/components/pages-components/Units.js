import React from "react";
import { Row, Col } from "react-bootstrap";
import { tabContent } from "../../data/Content";
import { useGlobalContext } from "../../contexts/GlobalContext";

const Units = () => {
    const { handleButtonClick } = useGlobalContext();

    return <Row className="welcome-tabs">
        <Col className="offset-md-2 video-box mt-3" md={8} >
            <video src="../../video/Sunday-Hero-Video.mp4" autoPlay controls></video>
        </Col>
        <Col className="mt-3 offset-md-1 buttons-group" md={10}>
            {tabContent.map((item, index) => {
                return (
                    <button key={index} className={`welcome-title btn`} onClick={() => handleButtonClick(index)}>{item.title}</button>
                )
            })}
        </Col>
    </Row>;
};
export default Units;
