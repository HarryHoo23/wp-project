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

const Siteplan = () => {
  const { type } = useParams();
  let { url } = useRouteMatch();
  const { width, height } = useWindowDimensions();
  const { unitMapIndex, setIsLoading } = useGlobalContext();

  let containerWidth;
  const [unitMap, setUnitMap] = useState();
  const [sitePlan, setSitePlan] = useState();

  let containerHeight = height - 224;
  let fakeWidth = (width - 160) * 2 / 3;
  console.log(fakeWidth + ", " + containerHeight);
  if (containerHeight < 1167 && fakeWidth / containerHeight <= 1234 / 1167) {
    containerWidth = (containerHeight * 1234) / 1167;
  } else if (containerHeight < 1167 && fakeWidth / containerHeight >= 1234 / 1167) {
    containerWidth = (containerHeight * 1234) / 1167;
  }

  const [img, setImg] = useState();
  let history = useHistory();

  const clickHandler = () => {
    setIsLoading(true);
    history.goBack();
  };

  useEffect(() => {
    if (type) {
      const unitType = sitePlanData.find((element) => element.type === type);
      const unitMapData = unit_maps.find((element) => element.type === type);
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
  }, []);

  return (
    <>
      {sitePlan && img && unitMap && (
        <SectionWrapper class={'section'}>
          <div className='bg-wrapper white'>
            <Row className='sd-everyday-row siteplan-row'>
              <Col md={4}>
                <Title
                  colorClassName=''
                  firstHalfTitle='Office'
                  secondHalfTitle='Warehouse'
                />
                <br/>
                <UnitDropdown type={sitePlan} />
                <div className='siteplan_Info'>
                  <h5>{sitePlan[unitMapIndex].unit_id}</h5>
                  <p>Ground Level: {sitePlan[unitMapIndex].ground_level}</p>
                  <p>Mezzainne: {sitePlan[unitMapIndex].mezzanine_level}</p>
                  <p>Total: {sitePlan[unitMapIndex].total_area}</p>
                  <p>
                    Allocated Car Spaces:{' '}
                    {sitePlan[unitMapIndex].allocated_car_spaces}
                  </p>
                </div>
                <Link
                  to={{
                    pathname: `${url}/${sitePlan[unitMapIndex].unit_id}`,
                    state: { url: `${url}` },
                  }}
                  className='btn btn-primary view-specs'
                >
                  View Specs
                </Link>

                <br />
                {type && (
                  <button
                    className='btn btn-primary'
                    type='button'
                    onClick={clickHandler}
                  >
                    Go Back
                  </button>
                )}
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
        </SectionWrapper>
      )}
    </>
  );
};

export default Siteplan;
