import React from "react";
import { Table } from "react-bootstrap";

const DepreScheduleFinancial = (props) => { 

    const fullList = () => {
        return (
            <tbody>                   
                {props.data.data.map((item, index) => {                    
                    if (item) {
                        return (
                            <tr key={index}>
                                <td>{props.data.unit[index]}</td>
                                {item.map((cell, index) => {
                                    return (
                                        <td key={index}>{cell}</td>
                                    )
                                })}
                            </tr>
                        )
                    } else {
                        return null;
                    }
                })}
            </tbody>
        )
    }
    return (
        <>
            {props.showFull && <h2 className="text-center">Estimated Depreciation Schedule</h2>}    
            <Table responsive bordered striped hover size="lg" className="depre-table mt-5 h-100">
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
                {fullList()}
            </Table>
        </>
    );
};

export default DepreScheduleFinancial;
