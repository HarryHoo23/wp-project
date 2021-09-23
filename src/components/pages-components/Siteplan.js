import React, { useEffect, useState } from 'react';
// import UnitDropdown from './UnitDropdown';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import SitePlanImg from '../../assests/img/slider-1.jpg';
import { sitePlanData } from '../../data/Content';
import SectionWrapper from '../SectionWrapper';

const Siteplan = () => {
  const { type } = useParams();
  const [sitePlan, setSitePlan] = useState(sitePlanData[0].data[0]);
  let history = useHistory();
  useEffect(() => {
    if (type) {
      const unitType = sitePlanData.find((element) => element.type === type);
      setSitePlan(unitType.data[0]);
    } else {
      const unitType = sitePlanData.find(
        (element) => element.type === 'office-warehouse'
      );
      setSitePlan(unitType.data[0]);
    }
  }, []);

  return (
    <SectionWrapper class={'section'}>
      <div className="bg-wrapper">
        <Row className="sd-everyday-row">
          <Col md={4}>
            {/* <UnitDropdown type={sitePlan} /> */}
            <div className='siteplan_Info'>
              <p>Ground Level: {sitePlan.ground_level}</p>
              <p>Mezzainne: {sitePlan.mezzanine_level}</p>
              <p>Total: {sitePlan.total_area}</p>
              <p>Allocated Car Spaces: {sitePlan.allocated_car_spaces}</p>
            </div>
          </Col>
          <Col md={8}>
            <img
              className='siteplan-img'
              src={SitePlanImg}
              alt='Siteplan Image'
            />
          </Col>
        </Row>
      </div>
    </SectionWrapper>
  );
};

export default Siteplan;
