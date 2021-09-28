import React from 'react';
import { Table } from 'react-bootstrap';
import { allUnitInfo } from '../../../data/Content';

const EstOutgoings = () => {
  return (
    <Table striped hover size='sm'>
      <thead>
        <tr>
          <th>unit</th>
          <th>building area</th>
          <th>civ</th>
          <th>nav-5% of civ</th>
          <th>est land value</th>
          <th>council value</th>
          <th>water rates</th>
          <th>lot e&l</th>
          <th>owners corp</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        {allUnitInfo.map((item, index) => {
          return (
            <tr key={item.unit_id}>
              <td>{index + 1}</td>
              <td>{item.total_area} sqm</td>
              <td>{item.estimated_outgoings.civ}</td>
              <td>{item.estimated_outgoings.nav_of_civ}</td>
              <td>{item.estimated_outgoings.est_land_value}</td>
              <td>{item.estimated_outgoings.council_rates}</td>
              <td>{item.estimated_outgoings.water_rates}</td>
              <td>{item.estimated_outgoings.lot_el}</td>
              <td>{item.estimated_outgoings.owners_copr}</td>
              <td>{item.estimated_outgoings.total}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default EstOutgoings
