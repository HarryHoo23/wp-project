import React from "react";
import { Table } from "react-bootstrap";

const EstimateOutgoingsFinancial = (props) => {   
    
    const fullList = () => {
        return (
            <tbody>                   
                {props.data.data.map((item, index) => {                    
                    if (item) {
                        return (
                            <tr key={index}>
                                <td>{props.data.unit[index]}</td>
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
                    } else {
                        return null;
                    }
                })}
            </tbody>
        )
    }

    return (
        <>
            {props.showFull && <h2 className="text-center">Estimated Outgoings</h2>}    
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
                {fullList()}
                
            </Table>
        </>
    );
};

export default EstimateOutgoingsFinancial;
