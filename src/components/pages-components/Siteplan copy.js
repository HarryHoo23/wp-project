import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link, useRouteMatch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { sitePlanData } from '../../data/Content';
import { unit_maps } from '../../data/Coordinates';
import SectionWrapper from '../SectionWrapper';
import Title from './Title';
import UnitDropdown from './UnitDropdown';
import ImageUnitMapper from '../ImageMapper/ImageUnitMapper';
import useWindowDimensions from '../../contexts/useWindowsDimension';
import { useGlobalContext } from '../../contexts/GlobalContext';
import TopNavbar from '../header & footer/TopNavbar';
import Navbar from '../header & footer/Navbar';

const Siteplan = () => {
  const { type } = useParams();
  let { url } = useRouteMatch();
  const { width, height } = useWindowDimensions();
  const { unitMapIndex, setIsLoading } = useGlobalContext();
  const [title, setTitle] = useState({
    first: 'office',
    second: 'warehouse'
  })

  let containerWidth;
  const [unitMap, setUnitMap] = useState();
  const [sitePlan, setSitePlan] = useState();

  let containerHeight = height - 224;
  let fakeWidth = (width - 160) * 2 / 3;
  if (containerHeight < 1167 && fakeWidth / containerHeight <= 1234 / 1167) {
    containerWidth = (containerHeight * 1234) / 1167;
  } else if (containerHeight < 1167 && fakeWidth / containerHeight >= 1234 / 1167) {
    containerWidth = (containerHeight * 1234) / 1167;
  }

  const [img, setImg] = useState();
  let history = useHistory();

  const clickHandler = () => {
    setIsLoading(false);
    history.push('/#commercial-units');
  };

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
      setImg(unitType.img);
    } else {
      const unitType = sitePlanData.find(
        (element) => element.type === 'office-warehouse'
      );
      setSitePlan(unitType.data);
      setImg(unitType.img);
      setUnitMap(unit_maps[0].data);
    }
    // eslint-disable-next-line
  }, [url]);

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
              <a className='download-btn' href='http://localhost:3000/access#maps' download>
                Download Pdf
              </a>
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
                      onClick={clickHandler}
                    >
                      BACK
                    </span>
                  )}
                </div>
                <div className='siteplan_Info'>
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
                <Link
                  to={{
                    pathname: `${url}/${sitePlan[unitMapIndex].unit_id}`,
                    state: { url: `${url}`, siteData: sitePlan },
                  }}
                  className='btn unit-button'
                >
                  {`View Unit ${unitMapIndex + 1} Spec`}
                </Link>

                <br />
              </Col>
              <Col md={8}>
                <div className='img-mapper-container'>
                  <ImageUnitMapper
                    width={containerWidth}
                    src={img}
                    maps={unitMap}
                    height={containerHeight}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <Navbar title={breadComponent} additionClass="opacity-deep" unitClass='unit-bar' />
        </SectionWrapper>
      )}
    </>
  );
};

export default Siteplan;
