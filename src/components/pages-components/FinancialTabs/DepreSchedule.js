import React from 'react';
import { Table } from 'react-bootstrap';
import { allUnitInfo } from '../../../data/Content';

const DepreSchedule = () => {
  return (
    <Table striped hover size='sm' className="depre-table">
      <thead>
        <tr>
          <th>unit</th>
          <th>year 1</th>
          <th>year 2</th>
          <th>year 3</th>
          <th>year 4</th>
          <th>year 5</th>
          <th>year 6</th>
          <th>year 7</th>
          <th>year 8</th>
          <th>year 9</th>
          <th>year 10</th>
          <th>residual</th>
          <th>40 year total</th>
        </tr>
      </thead>
      <tbody>
        {allUnitInfo.map((item, index) => {
          return (
            <tr key={item.unit_id}>
              <td>{index + 1}</td>
              <td>{item.depreciation_schedule.year_1}</td>
              <td>{item.depreciation_schedule.year_2}</td>
              <td>{item.depreciation_schedule.year_3}</td>
              <td>{item.depreciation_schedule.year_4}</td>
              <td>{item.depreciation_schedule.year_5}</td>
              <td>{item.depreciation_schedule.year_6}</td>
              <td>{item.depreciation_schedule.year_7}</td>
              <td>{item.depreciation_schedule.year_8}</td>
              <td>{item.depreciation_schedule.year_9}</td>
              <td>{item.depreciation_schedule.year_10}</td>
              <td>{item.depreciation_schedule.residual}</td>
              <td>{item.depreciation_schedule.fourty_year_total}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default DepreSchedule
