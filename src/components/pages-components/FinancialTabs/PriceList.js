import React from "react";
import { Table } from "react-bootstrap";
import { sitePlanData } from "../../../data/Content";
import useWindowDimensions from "../../../contexts/useWindowsDimension";

const PriceList = (props) => {

    const { height } = useWindowDimensions();

    let rowNumber;
    if (height < 800) {
        rowNumber = 1;
    } else {
        rowNumber = Math.ceil(height / 800);
    }

    const tableReduced = (row) => {
        return (
            <>                
                <tbody>
                    {row.data.slice(0, rowNumber).map((item, index) => {
                        return (
                            <tr key={index}>                                        
                                <td>{item.unit_number}</td>
                                <td>{item.ground_level > 0 && item.ground_level}</td>
                                <td>{item.first_level > 0 && item.first_level}</td>
                                <td>{item.upper_floor > 0 ? item.upper_floor : (item.yard_space ? item.yard_space : "")}</td>
                                <td>{parseInt(item.ground_level) + parseInt(item.first_level) + parseInt(item.upper_floor)} </td>
                                <td>{item.allocated_car_spaces}</td>
                                <td>{item.sale_price}</td>
                                <td>{item.lease_price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </>
        )
    }

    const tableFull = (row) => {
        return (
            <>               
                <tbody>
                    {row.data.map((item, index) => {
                        return (
                            <tr key={index}>                                        
                                <td>{item.unit_number}</td>
                                <td>{item.ground_level > 0 && item.ground_level}</td>
                                <td>{item.first_level > 0 && item.first_level}</td>
                                <td>{item.upper_floor > 0 ? item.upper_floor : (item.yard_space ? item.yard_space : "")}</td>
                                <td>{parseInt(item.ground_level) + parseInt(item.first_level) + parseInt(item.upper_floor)}</td>
                                <td>{item.allocated_car_spaces}</td>
                                <td>{item.sale_price}</td>
                                <td>{item.lease_price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </>
        )
    }

    return (
        <Table responsive bordered striped hover size="lg" className="depre-table mt-5 h-100">
            <thead>
                <tr>                                
                    <th>Building</th>
                    <th>Ground Level (&#13217;)</th>
                    <th>First Level (&#13217;)</th>
                    <th>Upper Floor (&#13217;)</th>
                    <th>Total Area (&#13217;)</th>
                    <th>Car Spaces</th>
                    <th>Sale Price</th>
                    <th>Lease Price</th>
                </tr>
            </thead>
            {sitePlanData.map((row, index) => {
                return (
                    <React.Fragment key={index}>
                        {!props.showFull ? tableReduced(row) : tableFull(row)}
                    </React.Fragment>
                )
            })}
        </Table>
    );
};

export default PriceList;
