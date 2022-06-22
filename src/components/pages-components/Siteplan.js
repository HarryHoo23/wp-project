import React, { useEffect, useState, useRef } from 'react';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { sitePlanData } from '../../data/Content';
import { unit_maps } from '../../data/Coordinates';
import { useGlobalContext } from '../../contexts/GlobalContext';
import SectionWrapper from '../SectionWrapper';
import Title from './Title';
import UnitDropdown from './UnitDropdown';
// import ImageUnitMapper from '../ImageMapper/ImageUnitMapper';
import TopNavbar from '../header & footer/TopNavbar';
import Navbar from '../header & footer/Navbar';
import UnitModal from './UnitModals/UnitModal';
import ImagePropertyMapper from '../ImageMapper/ImagePropertyMapper';
import planImage from '../../assests/img/floorplan/3.png';

const Siteplan = () => {
    const { type } = useParams();
    let { url } = useRouteMatch();
    const { unitMapIndex, setIsLoading } = useGlobalContext();
    const [title, setTitle] = useState({
        first: '',
        second: ''
    })
    const [unitMap, setUnitMap] = useState();
    const [sitePlan, setSitePlan] = useState();
    const [img, setImg] = useState();
    const [mapperImg, setMapperImg] = useState();
    // eslint-disable-next-line
    const [unitContent, setUnitContent] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [componentNumber, setComponentNumber] = useState(1);
    const [width, setWidth] = useState();
    const [size, setSize] = useState(window.innerWidth);
    
    const imageRef = useRef(null);
    let history = useHistory();

    const styles = {
        flexDirection: "column"
    }

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    const clickHandler = () => {
        setIsLoading(false);
        history.push('/#commercial-units');
    };
        
    const openUnitModal = (index) => {
        setIsOpen(true);
        setComponentNumber(index);
    };

    const closeUnitModal = () => {
        setIsOpen(false);
        setComponentNumber(1);        
    };

    useEffect(() => {
        if (!imageRef.current) {
            setWidth(1);
        } else {
            setWidth(imageRef.current.offsetWidth);
        }
    }, [width, size]);

    useEffect(() => {
        window.addEventListener("resize", checkSize);  
        // document.body.style.setProperty('overflow', 'scroll', 'important');
        return () => {
            window.removeEventListener("resize", checkSize);
        };
    }, []);

    useEffect(() => {
        if (type) {
            const unitType = sitePlanData.find((element) => element.type === type);
            const unitMapData = unit_maps.find((element) => element.type === type);
            const { first_half_title, second_half_title } = unitType;
            let pageTitle = {
                first: first_half_title,
                second: second_half_title,
            };
            
            setTitle(pageTitle);
            setSitePlan(unitType.data);
            setUnitMap(unitMapData.data);
            setUnitContent(unitType.data[unitMapIndex]);
            setImg(unitType.img);
            if (unitType.data[unitMapIndex].img) {
                setMapperImg(unitType.data[unitMapIndex].img);
            } else {
                setMapperImg(planImage);
            }
        } else {
            const unitType = sitePlanData.find(
                (element) => element.type === 'showroom'
            );
            setSitePlan(unitType.data);
            setImg(unitType.img);
            setUnitMap(unit_maps[0].data);
        }
        // eslint-disable-next-line
    }, [url, unitMapIndex]);

    let breadComponent = (
        <span className='bread-text'>
            <button onClick={clickHandler}>UNITS</button> /{` ${title.first}`} {title.second}
        </span>
    );
    
    return (
        <>
            {sitePlan && img && unitMap && (
                <SectionWrapper class={'section'} idName={'units'}>
                <TopNavbar goBack={true} addtionalClass='opacity-deep hide-enquiry' />
                <div className='bg-wrapper white'>
                    <Row className='sd-everyday-row siteplan-row'>
                        <Col md={4}>
                            <Title
                            colorClassName=''
                            firstHalfTitle={`${title.first}`}
                            secondHalfTitle={`${title.second}`}
                            />
                            <br />
                            <div className='button-group'>
                                <UnitDropdown type={sitePlan} />
                                {type && (
                                    <span
                                    className='back-button'
                                    type='button'
                                    onClick={clickHandler}>
                                        BACK
                                    </span>
                                )}
                            </div>
                            <div className='siteplan_Info mt-4'>
                                <h5>{sitePlan[unitMapIndex].unit_number}</h5>
                                <p>
                                    <strong>Ground Level:</strong>{' '}
                                    {sitePlan[unitMapIndex].ground_level}
                                </p>
                                <p>
                                    <strong>Mezzanine:</strong>{' '}
                                    {sitePlan[unitMapIndex].mezzanine_level}
                                </p>
                                <p>
                                    <strong>Total:</strong> {sitePlan[unitMapIndex].total_area}
                                </p>
                                <p style={{ marginTop: '1rem' }}>
                                    <strong>Allocated Car Spaces: </strong>
                                    {sitePlan[unitMapIndex].allocated_car_spaces}
                                </p>
                            </div>
                            <div className='units-button-group'>
                                <button
                                    className='btn unit-button'
                                    onClick={() => openUnitModal(1)}
                                >
                                    EST. OUTGOINGS
                                </button>
                                <button
                                    className='btn unit-button'
                                    onClick={() => openUnitModal(2)}
                                >
                                    OWNERS CORP
                                </button>
                                <button
                                    className='btn unit-button'
                                    onClick={() => openUnitModal(3)}
                                >
                                    DEPRECIATION
                                </button>
                                <a className='download-btn' href='http://localhost:3000/access#maps' download>
                                    Print
                                </a>
                            </div>

                            <br />
                        </Col>
                        <Col md={8} className="d-flex" style={styles} ref={imageRef}>
                            <div className='img-mapper-container'>
                                <img src={img} alt="siteplan-img" className="w-100" />
                            </div>
                            <div className="img-bottom-container">
                                <ImagePropertyMapper width={width} maps={unitMap} image={mapperImg} isSitePlan={true} />    
                            </div>
                        </Col>
                    </Row>
                    <UnitModal
                        onClose={closeUnitModal}
                        onShow={isOpen}
                        number={componentNumber}
                    />
                </div>
                <Navbar title={breadComponent} additionClass="opacity-deep" unitClass='unit-bar' />
            </SectionWrapper>
        )}
        </>
  );
};

export default Siteplan;
