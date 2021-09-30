import React, { useState, useRef } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { sitePlanData } from '../../data/Content';
import { useEffect } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';
import Title from './Title';
import TopNavbar from '../header & footer/TopNavbar';
import UnitDropdown from './UnitDropdown';
import UnitModal from './UnitModals/UnitModal';
import ImageGallary from '../ImageGallary';
import Navbar from '../header & footer/Navbar';
import arrow from '../../assests/img/download-2.png';
import fullScreen from '../../assests/img/icons/lightbox-expand.svg';

const SingleUnit = (props) => {
  const { id } = useParams();
  const { unitMapIndex } = useGlobalContext();
  const [height, setHeight] = useState(0);
  const { url, siteData } = props.location.state;
  const [unitData, setUnitData] = useState(sitePlanData[0]);
  const [isOpen, setIsOpen] = useState(false);
  const heightRef = useRef();
  const [componentNumber, setComponentNumber] = useState(1);

  let history = useHistory();
  let replacedUrl = url.replace(/\//g, '');

  const openUnitModal = (index) => {
    setIsOpen(true);
    setComponentNumber(index);
  };

  const closeUnitModal = () => {
    setIsOpen(false);
    setComponentNumber(1);
  };

  function changeArrow() {
    let image_gallery_icons =
      document.getElementsByClassName('image-gallery-icon');
    for (let i = 0; i < image_gallery_icons.length; i++) {
      image_gallery_icons[i].innerHTML = `<img src=${arrow} alt="arrow" />`;
    }

    let fullscreenButtons = document.getElementsByClassName(
      'image-gallery-fullscreen-button'
    );
    for (let i = 0; i < fullscreenButtons.length; i++) {
      fullscreenButtons[
        i
      ].innerHTML = `<img src=${fullScreen} alt="fullScreen" />`;
    }
  }

  useEffect(() => {
    changeArrow();
    setHeight(heightRef.current.clientHeight);
    if (id) {
      const property_type = sitePlanData.find(
        (element) => element.type === replacedUrl
      );
      const unit = property_type.data.find((element) => element.unit_id === id);
      setUnitData(unit);
    } else {
      const unit = sitePlanData.find(
        (element) => element.unit_id === 'unit-01'
      );
      setUnitData(unit);
    }
    // eslint-disable-next-line
  }, []);
  
  useEffect(() => {
    const property_type = sitePlanData.find(
      (element) => element.type === replacedUrl
    );
    setUnitData(property_type.data[unitMapIndex]);
  }, [unitMapIndex]);

  let imageHeight;
  if (height !== 0) {
    imageHeight = height + 32 + 160;
  }

  function unitType(string) {
    let unitType = string.replace(/-/g, ' ');
    return unitType;
  }

  let breadComponent = (
    <span className='bread-text'>
      <Link to='/'>UNITS</Link> /{' '}
      <span className='bread-text' onClick={() => history.goBack()}>
        {unitType(props.match.params.type)}
      </span>{' '}
      / {unitData.unit_number}
    </span>
  );

  return (
    <>
      <TopNavbar goBack={true} addtionalClass='opacity-deep hide-enquiry' />
      <div className={`${id ? 'unit-wrapper' : ''}`}>
        <Row>
          <a className='download-btn' href='#' download>
            Download Pdf
          </a>
          <Col md={4}>
            <div ref={heightRef}>
              <Title
                colorClassName=''
                firstHalfTitle={unitData.unit_number}
                secondHalfTitle='Specifications'
              />
            </div>

            <div className='button-group'>
              <UnitDropdown type={siteData} />

              <button
                className='back-button'
                type='button'
                onClick={() => history.goBack()}
              >
                BACK
              </button>
            </div>
            <div className='siteplan_Info'>
              <p>
                <strong>Price:</strong> {unitData.unit_price}
              </p>
              <p>
                <strong>Office:</strong> {unitData.mezzanine_level}
              </p>
              <p style={{ marginTop: '1rem' }}>
                <strong>Total:</strong> {unitData.total_area}
              </p>
              <p style={{ marginTop: '1rem' }}>
                <strong>Allocated Car Spaces: </strong>
                {unitData.allocated_car_spaces}
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
            </div>
          </Col>
          <Col md={8}>
            <div
              className='image-gallery-container'
              style={{ height: `calc(100vh - ${imageHeight}px)` }}
            >
              <ImageGallary />
            </div>
          </Col>
        </Row>
        <UnitModal
          onClose={closeUnitModal}
          onShow={isOpen}
          number={componentNumber}
        />
      </div>
      <Navbar
        title={breadComponent}
        additionClass='opacity-deep'
        unitClass='unit-bar'
      />
    </>
  );
};

export default SingleUnit;
