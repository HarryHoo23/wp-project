import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import { google_map_data } from "../../data/MapData";
import bookMarker from "../../assests/img/icons/icon-marker.png";


const AnyReactComponent = ({ src, info, show, click }) => (    
    <div
        style={{ position: "relative", display: "flex", justifyContent: "center", transform: "translate(-50%, -50%)" }}
        onClick={click}
    >
        {show && <div className="info-window">{info}</div>}
        <img className={`${src === bookMarker ? 'big marker-icon' : 'marker-icon'}`} src={src} alt="marker" />
    </div>
);

const Map = () => {
    const center = { lat: -37.94971603444668, lng: 145.05853242892192 };
    const zoom = 16;
    const [isShow, SetIsShow] = useState(google_map_data.loactions_coordinates);

    function toggleMarker(index) {
        let tempState = [...isShow];
        let temp_element = { ...tempState[index] };
        temp_element.show = !temp_element.show;
        tempState[index] = temp_element;
        SetIsShow(tempState);
    }

    return (
        <Row className="h-100">
            <Col md={12} className="h-100 w-100">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                    center={center}
                    zoom={zoom}
                    options={{ styles: google_map_data.mapStyle }}
                >
                    {google_map_data.loactions_coordinates.map((marker, index) => {
                        return (
                            <AnyReactComponent
                                key={index}
                                lat={marker.position.lat}
                                lng={marker.position.lng}
                                src={marker.type}
                                info={google_map_data.locationName[index]}
                                show={isShow[index].show}
                                click={() => toggleMarker(index)}
                            />
                        );
                    })}
                </GoogleMapReact>
                );
            </Col>
        </Row>
    );
};

export default Map;
