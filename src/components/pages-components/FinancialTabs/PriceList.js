import React from 'react';
import { Table } from 'react-bootstrap';
import { allUnitInfo } from '../../../data/Content';

const PriceList = () => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>unit</th>
          <th>office</th>
          <th>warehouse</th>
          <th>total</th>
          <th>cars</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {allUnitInfo.map((item, index) => {
          return (
            <tr key={item.unit_id}>
              <td>{index + 1}</td>
              <td>{item.mezzanine_level}</td>
              <td>{item.ground_level}</td>
              <td>{item.total_area}</td>
              <td>{item.allocated_car_spaces}</td>
              <td>{item.unit_price}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default PriceList
