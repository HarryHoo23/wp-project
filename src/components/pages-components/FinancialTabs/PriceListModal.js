import React from "react";
import { Table } from "react-bootstrap";

const PriceListModal = (props) => {
    return (
        <Table responsive bordered striped hover size="lg" className="depre-table mt-5 h-100">
            <thead className="sticky-header">
                <tr>                                
                    <th>Building</th>                    
                    <th>Total Area (&#13217;)</th>
                    <th>Car Spaces</th>
                    <th>Sale Price</th>
                    <th>Lease Price</th>
                </tr>
            </thead>
            <tbody>
                {props.data && props.data.map((item, index) => {
                    return (
                        <tr key={index} className={`${index === props.unitNumber ? 'active' : ''}`}>                                        
                            <td>{item.unit_number}{item.sold ? ' (Sold)' : ''}</td>                            
                            <td>{parseInt(item.ground_level) + parseInt(item.first_level) + parseInt(item.upper_floor) + (item.basement ? item.basement : 0)} </td>
                            <td>{item.allocated_car_spaces > 0 && item.allocated_car_spaces}</td>
                            <td>{item.sale_price}</td>
                            <td>{item.lease_price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
};

export default PriceListModal;