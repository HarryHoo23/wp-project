import React from "react";
import { Table } from "react-bootstrap";
import { useGlobalContext } from "../../../contexts/GlobalContext";

const PriceList = (props) => {

    const {sitePlanData} = useGlobalContext()

    const tableFull = (row) => {
        return (             
            <>
                {row.data.map((item, index) => {
                    return (
                        <tr key={index}>                                        
                            <td>{item.unit_number}{item.sold ? ' (Sold)' : ''}</td>
                            <td>{item.ground_level > 0 && item.ground_level}</td>
                            <td>{item.first_level > 0 && item.first_level}</td>
                            <td>{item.upper_floor > 0 && item.upper_floor}</td>
                            <td>{item.yard_space && item.yard_space}</td>
                            <td>{item.basement && item.basement}</td>
                            <td>{parseInt(item.ground_level) + parseInt(item.first_level) + parseInt(item.upper_floor) + (item.basement ? item.basement : 0)} </td>
                            <td>{item.allocated_car_spaces > 0 && item.allocated_car_spaces}</td>
                            <td>{item.sale_price}</td>
                            <td>{item.lease_price}</td>
                        </tr>
                    )
                })}
            </>
        )
    }

    return (
        <Table responsive bordered striped hover size="lg" className="depre-table mt-5 h-100">
            <thead className="sticky-header">
                <tr>                                
                    <th>Building</th>
                    <th>Ground Level (&#13217;)</th>
                    <th>First Level (&#13217;)</th>
                    <th>Upper Floor (&#13217;)</th>
                    <th>Yard Space</th>
                    <th>Basement</th>
                    <th>Total Area (&#13217;)</th>
                    <th>Car Spaces</th>
                    <th>Sale Price</th>
                    <th>Lease Price</th>
                </tr>
            </thead>
            <tbody>
                {sitePlanData.map((row, index) => {
                    return (
                        <React.Fragment key={index}>
                            {tableFull(row)}
                        </React.Fragment>
                    )
                })}
            </tbody>
        </Table>
    );
};

export default PriceList;
