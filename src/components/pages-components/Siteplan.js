import React, { useEffect, useState, useRef } from 'react';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { sitePlanData } from '../../data/Content';
import { unit_maps, areas_type_storage_complex_siteplan_1, areas_type_storage_complex_siteplan_2 } from '../../data/Coordinates';
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
    const [unitMap, setUnitMap] = useState(unit_maps[0].data);
    const [sitePlan, setSitePlan] = useState();
    const [img, setImg] = useState();
    const [mapperImg, setMapperImg] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [componentNumber, setComponentNumber] = useState(1);
    const [width, setWidth] = useState();
    const [size, setSize] = useState(window.innerWidth);
    const [isStorageTwo, setIsStorageTwo] = useState(false);
    
    const imageRef = useRef(null);
    let history = useHistory();

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
        return () => {
            window.removeEventListener("resize", checkSize);
        };
    }, []);

    useEffect(() => {
        if (type) {
            const unitType = sitePlanData.find((element) => element.type === type);
            const unitMapData = unit_maps.find((element) => element.type === type);                       
            let pageTitle = {
                first: unitType.first_half_title,
                second: unitType.second_half_title,
            };
            setTitle(pageTitle);
            setSitePlan(unitType.data);            
            setUnitMap(unitMapData.data);
            if (type === "storage-complex") {
                if (unitMapIndex > 23) {
                    setUnitMap(areas_type_storage_complex_siteplan_2);
                    setIsStorageTwo(true);
                } else {
                    setUnitMap(areas_type_storage_complex_siteplan_1);
                    setIsStorageTwo(false);
                }
            }
            setImg(unitType.data[unitMapIndex].img);
            console.log(unitType.data[unitMapIndex].sitePlanImg);
            if (unitType.data[unitMapIndex].img) {
                setMapperImg(unitType.data[unitMapIndex].sitePlanImg);
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

    let data = {
        unit: [],
        estimateOutgoings: [],
        ownersCorp: [],
        depreciationScheduleData: [],
    };

    //depreciation_schedule is estimate depreciation.
    if (sitePlan) {
        data.unit = sitePlan.map((item) => item.unit_number);
        if (data.depreciationScheduleData) {
            data.depreciationScheduleData = sitePlan.map((item) => Object.values(item.depreciation_schedule));
        }
        data.estimateOutgoings = sitePlan.map((item) => Object.values(item.estimated_outgoings));        
    }
    
    return (
        <>
            {sitePlan && img && unitMap && (
                <SectionWrapper class={'section'} idName={'units'}>
                <TopNavbar goBack={true} addtionalClass='opacity-deep hide-enquiry' className='bg-white' showLogo={true} />
                <div className='bg-wrapper white site-plan'>
                    <Row className='sd-everyday-row siteplan-row' ref={imageRef}>
                        <Col xl={4} lg={3} className="p-0">
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
                                <a className='download-btn' href='#' download>
                                    Print
                                </a>
                            </div>
                            <div className='siteplan_Info mt-4'>
                                <h5>{sitePlan[unitMapIndex].unit_number}</h5>
                                {sitePlan[unitMapIndex].ground_level > 0 && 
                                    <p>
                                        <strong>Ground Level:</strong>{' '}
                                        {sitePlan[unitMapIndex].ground_level} &#13217;
                                    </p>                                
                                    }
                                    
                                {sitePlan[unitMapIndex].first_level > 0 &&
                                    <p>                            
                                        <strong>First Level:</strong>{' '}
                                        {sitePlan[unitMapIndex].first_level} &#13217;
                                    </p>                            
                                }
                                {sitePlan[unitMapIndex].upper_floor > 0 &&
                                    <p>                            
                                        <strong>Upper Level:</strong>{' '}
                                        {sitePlan[unitMapIndex].upper_floor} &#13217;
                                    </p>                            
                                }        
                                {sitePlan[unitMapIndex].yard_space && <p>                            
                                        <strong>Yard Space:</strong>{' '}
                                        {sitePlan[unitMapIndex].yard_space} &#13217;
                                    </p>
                                }
                                {sitePlan[unitMapIndex].basement && <p>                            
                                        <strong>Basement:</strong>{' '}
                                        {sitePlan[unitMapIndex].basement} &#13217;
                                    </p>
                                }        
                                <p>
                                    <strong>Total:</strong> {parseInt(sitePlan[unitMapIndex].ground_level) + parseInt(sitePlan[unitMapIndex].first_level) + parseInt(sitePlan[unitMapIndex].upper_floor) + (sitePlan[unitMapIndex].basement ? sitePlan[unitMapIndex].basement : 0)} &#13217;
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
                                {type !== "showroom" && <button
                                    className='btn unit-button'
                                    onClick={() => openUnitModal(3)}
                                >
                                    DEPRECIATION
                                </button> }                                    
                                {type !== "showroom" && <button
                                    className='btn unit-button'
                                    onClick={() => openUnitModal(4)}
                                >
                                    INVESTMENT ANALYSIS
                                </button> }                                   
                            </div>

                            <br />
                        </Col>
                        <Col xl={8} lg={9} className="d-flex p-0 align-items-center">
                            <div className='img-mapper-container'>
                                <img src={img} alt="siteplan-img" className="w-100" />
                            </div>
                            </Col>
                        <Col md={12} className="p-0">
                            <div className="img-bottom-container">
                                <ImagePropertyMapper width={width} maps={unitMap} image={mapperImg} isSitePlan={false} type={type} isStorageTwo={isStorageTwo} />
                            </div> 
                        </Col>
                    </Row>
                    <UnitModal
                        onClose={closeUnitModal}
                        onShow={isOpen}
                        number={componentNumber}
                        data={data}    
                        unitNumber={sitePlan[unitMapIndex].unit_number}  
                        type={type}    
                        unitMapIndex={unitMapIndex}
                        className="scroll-modal-body"    
                    />
                </div>
                <Navbar title={breadComponent} additionClass="opacity-deep" className="bg-white" unitClass='unit-bar' />
            </SectionWrapper>
        )}
        </>
  );
};

export default Siteplan;
