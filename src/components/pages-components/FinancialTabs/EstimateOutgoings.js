import React from "react";
import { Table } from "react-bootstrap";

const EstimateOutgoings = (props) => {
    return (
        <>
            <h2 className="text-center">Estimated Outgoings</h2>
            <Table responsive bordered striped hover size="lg" className="depre-table mt-5 h-100">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Building Area &#13217;</th>
                        <th>Council Rates</th>
                        <th>Water Rates</th>
                        <th>Owners Corp</th>
                        <th>Total </th>
                        <th>Lot E&L</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.map((item, index) => {
                        return (
                            <tr className={`${index === props.unitNumber ? 'active' : ''}`} key={index}>
                                <td>{props.unit[index]}</td>
                                {item.map((cell, index) => {                                    
                                    if (index === 1 || index === 2 || index === 3) {
                                        return null
                                    }
                                    return (
                                        <td key={index}>{cell}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default EstimateOutgoings;
