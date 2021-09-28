import React, { useEffect, useState } from 'react';
import {
  useParams,
  useHistory,
  Link,
  useRouteMatch,
} from 'react-router-dom';
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
  const { width } = useWindowDimensions();
  const { unitMapIndex } = useGlobalContext();

  let containerWidth;
  const [unitMap, setUnitMap] = useState();
  const [sitePlan, setSitePlan] = useState();

  if (width > 2012) {
    containerWidth = 1234;
  } else {
    containerWidth = ((width - 160) * 2) / 3;
  }

  const [img, setImg] = useState();
  let history = useHistory();

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
            <Row className='sd-everyday-row'>
              <Col md={4}>
                <Title
                  colorClassName=''
                  firstHalfTitle='SitePlan'
                  secondHalfTitle=''
                />
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
                    state: {url: `${url}`}
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
                    onClick={() => history.goBack()}
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
