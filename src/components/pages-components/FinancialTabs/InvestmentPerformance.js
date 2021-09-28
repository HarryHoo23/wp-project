import React from 'react';
import { Table } from 'react-bootstrap';
import { invest_performance_year_10 } from '../../../data/Content';


const InvestmentPerformance = () => {
  return (
    <Table className='performance'>
      <thead>
        <tr>
          <th>Your invest performance at year 10</th>
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
        </tr>
      </thead>
      <tbody>
        {invest_performance_year_10.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.invest_performance_year_10}</td>
              <td>{item.year_1}</td>
              <td>{item.year_2}</td>
              <td>{item.year_3}</td>
              <td>{item.year_4}</td>
              <td>{item.year_5}</td>
              <td>{item.year_6}</td>
              <td>{item.year_7}</td>
              <td>{item.year_8}</td>
              <td>{item.year_9}</td>
              <td>{item.year_10}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default InvestmentPerformance
