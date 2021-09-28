import React from 'react';
import { Table } from 'react-bootstrap';

const OwnersCooporation = () => {
  return (
    <Table className="owners">
      <thead>
        <tr>
          <th>Expenses</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Backflow Value Testing - Annual</td>
          <td>$200</td>
        </tr>
        <tr>
          <td>Electricity</td>
          <td>$200</td>
        </tr>
        <tr>
          <td>Essential Services Maintenance</td>
          <td>$200</td>
        </tr>
        <tr>
          <td>Gardening</td>
          <td>$200</td>
        </tr>
        <tr>
          <td>General Repairs</td>
          <td>$200</td>
        </tr>
        <tr>
          <td>Insurance</td>
          <td>$200</td>
        </tr>
        <tr>
          <td>Owners Corporation Management Fees</td>
          <td>$200</td>
        </tr>
        <tr>
          <td>Disbursements</td>
          <td>$200</td>
        </tr>
        <tr>
          <td>Accounting</td>
          <td>$200</td>
        </tr>
        <tr>
          <td>Water Usage</td>
          <td>$200</td>
        </tr>
        <tr className="final-tr">
          <td>Total Expense</td>
          <td>$32,500.00</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default OwnersCooporation
