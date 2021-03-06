import React from "react";
import { Table } from "react-bootstrap";

const DepreSchedule = (props) => {    
    return (
        <>
            <h2 className="text-center">Estimated Depreciation</h2>
            <Table responsive striped hover size="lg" className="depre-table mt-5 h-100">
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
                    </tr>
                </thead>                
                <tbody>
                    {props.data && props.data.map((item, index) => {
                        return (
                            <tr className={`${index === props.unitNumber ? 'active' : ''}`} key={index}>
                                <td>{props.unit[index]}</td>
                                {item.map((cell, index) => {
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

export default DepreSchedule;
