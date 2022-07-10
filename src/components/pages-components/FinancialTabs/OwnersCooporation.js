import React from "react";
import { Table } from "react-bootstrap";

const OwnersCooporation = (props) => {

    const fullTable = () => {
        return (
            <Table
                responsive
                bordered
                striped
                hover
                size="lg"
                className="depre-table owners mt-5 h-100"
            >         
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Expenses</td>
                        <td></td>
                        <td>OC1</td>
                        <td></td>
                        <td>OC2</td>
                        <td></td>
                        <td>OC3</td>
                        <td></td>
                        <td>OC 4</td>
                        <td></td>
                        <td>OC 5</td>
                        <td></td>
                        <td>OC 6</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Budget</td>
                        <td></td>
                        <td>Budget</td>
                        <td></td>
                        <td>Budget</td>
                        <td></td>
                        <td>Budget</td>
                        <td></td>
                        <td>Budget</td>
                        <td></td>
                        <td>Budget</td>
                    </tr>
                    <tr>
                        <td>Operating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Cleaning Supplies</td>
                        <td> $4,000.00 </td>
                        <td></td>
                        <td> $1,500.00 </td>
                        <td></td>
                        <td> $1,500.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $1,500.00 </td>
                        <td></td>
                        <td> $3,000.00 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Backflow Valve - Annual Test</td>
                        <td> $500.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Sanitary Disposal</td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $1,200.00 </td>
                        <td></td>
                        <td> $1,200.00 </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Garden Maintenance</td>
                        <td> $10,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Cleaning</td>
                        <td> $6,000.00 </td>
                        <td></td>
                        <td> $10,000.00 </td>
                        <td></td>
                        <td> $12,000.00 </td>
                        <td></td>
                        <td> $10,000.00 </td>
                        <td></td>
                        <td> $16,000.00 </td>
                        <td></td>
                        <td> $16,000.00 </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Sump Pump/Tank Maintenance</td>
                        <td> $3,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Lift Maintenance</td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $4,500.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Waste Disposal</td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $35,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Locks &amp; Keys</td>
                        <td> $- </td>
                        <td></td>
                        <td> $250.00 </td>
                        <td></td>
                        <td> $250.00 </td>
                        <td></td>
                        <td> $250.00 </td>
                        <td></td>
                        <td> $250.00 </td>
                        <td></td>
                        <td> $250.00 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Bin Cleaning</td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $2,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Thermographic scans</td>
                        <td> $3,500.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Access Control</td>
                        <td> $2,500.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>CCTV Maintenance</td>
                        <td> $2,500.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>AESMR</td>
                        <td> $2,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Window cleaning</td>
                        <td> $25,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Pest Control</td>
                        <td> $1,000.00 </td>
                        <td></td>
                        <td> $2,000.00 </td>
                        <td></td>
                        <td> $1,500.00 </td>
                        <td></td>
                        <td> $1,500.00 </td>
                        <td></td>
                        <td> $1,000.00 </td>
                        <td></td>
                        <td> $1,000.00 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Lamps/Globes/Tubes</td>
                        <td> $750.00 </td>
                        <td></td>
                        <td> $500.00 </td>
                        <td></td>
                        <td> $500.00 </td>
                        <td></td>
                        <td> $250.00 </td>
                        <td></td>
                        <td> $250.00 </td>
                        <td></td>
                        <td> $250.00 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Arborist (Tree Protection)</td>
                        <td> $3,500.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td>Utilities</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Lift Telephone</td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $1,500.00 </td>
                        <td></td>
                        <td> $1,500.00 </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Water Usage</td>
                        <td> $10,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $2,000.00 </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Electricity</td>
                        <td> $20,000.00 </td>
                        <td></td>
                        <td> $2,000.00 </td>
                        <td></td>
                        <td> $5,000.00 </td>
                        <td></td>
                        <td> $12,000.00 </td>
                        <td></td>
                        <td> $2,000.00 </td>
                        <td></td>
                        <td> $2,000.00 </td>
                    </tr>
                    <tr>
                        <td>Essential Services</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Fire Monitoring</td>
                        <td> $2,400.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Mechanical Ventilation</td>
                        <td> $- </td>
                        <td></td>
                        <td> $6,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>False Fire Alarm</td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Essential Service Maintenance (Common Area Only)</td>
                        <td> $2,000.00 </td>
                        <td></td>
                        <td> $1,500.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td>Maintenance</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>General Repairs</td>
                        <td> $2,450.00 </td>
                        <td></td>
                        <td> $1,650.00 </td>
                        <td></td>
                        <td> $1,800.00 </td>
                        <td></td>
                        <td> $950.00 </td>
                        <td></td>
                        <td> $1,450.00 </td>
                        <td></td>
                        <td> $1,900.00 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Plumbing Repairs</td>
                        <td> $3,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $1,000.00 </td>
                        <td></td>
                        <td> $1,000.00 </td>
                    </tr>
                    <tr>
                        <td>Administration</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Accounting/BAS Fees</td>
                        <td> $1,500.00 </td>
                        <td></td>
                        <td> $1,000.00 </td>
                        <td></td>
                        <td> $1,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $500.00 </td>
                        <td></td>
                        <td> $1,000.00 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Owners Corporation Management Fees</td>
                        <td> $18,600.00 </td>
                        <td></td>
                        <td> $11,900.00 </td>
                        <td></td>
                        <td> $20,100.00 </td>
                        <td></td>
                        <td> $3,850.00 </td>
                        <td></td>
                        <td> $3,150.00 </td>
                        <td></td>
                        <td> $14,400.00 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>OH &amp; S Report &amp; Compliance</td>
                        <td> $5,000.00 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Disbursements</td>
                        <td> $1,800.00 </td>
                        <td></td>
                        <td> $700.00 </td>
                        <td></td>
                        <td> $1,350.00 </td>
                        <td></td>
                        <td> $200.00 </td>
                        <td></td>
                        <td> $200.00 </td>
                        <td></td>
                        <td> $1,000.00 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Insurance Renewals</td>
                        <td> $67,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total</td>
                        <td> $198,000.00 </td>
                        <td></td>
                        <td> $39,000.00 </td>
                        <td></td>
                        <td> $45,000.00 </td>
                        <td></td>
                        <td> $72,000.00 </td>
                        <td></td>
                        <td> $32,000.00 </td>
                        <td></td>
                        <td> $43,000.00 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>SITE TOTAL</td>
                        <td>$429,000.00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>           
                </tbody>
            </Table>
        )
    }

    const halfTable = () => {
        return (
            <Table
                responsive
                bordered
                striped
                hover
                size="lg"
                className="depre-table owners mt-5 h-100"
            >         
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Expenses</td>
                        <td></td>
                        <td>OC1</td>
                        <td></td>
                        <td>OC2</td>
                        <td></td>
                        <td>OC3</td>
                        <td></td>
                        <td>OC 4</td>
                        <td></td>
                        <td>OC 5</td>
                        <td></td>
                        <td>OC 6</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Budget</td>
                        <td></td>
                        <td>Budget</td>
                        <td></td>
                        <td>Budget</td>
                        <td></td>
                        <td>Budget</td>
                        <td></td>
                        <td>Budget</td>
                        <td></td>
                        <td>Budget</td>
                    </tr>
                    <tr>
                        <td>Operating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Cleaning Supplies</td>
                        <td> $4,000.00 </td>
                        <td></td>
                        <td> $1,500.00 </td>
                        <td></td>
                        <td> $1,500.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $1,500.00 </td>
                        <td></td>
                        <td> $3,000.00 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Backflow Valve - Annual Test</td>
                        <td> $500.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Sanitary Disposal</td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $1,200.00 </td>
                        <td></td>
                        <td> $1,200.00 </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Garden Maintenance</td>
                        <td> $10,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>  
                    <tr>
                        <td> </td>
                        <td>Cleaning</td>
                        <td> $6,000.00 </td>
                        <td></td>
                        <td> $10,000.00 </td>
                        <td></td>
                        <td> $12,000.00 </td>
                        <td></td>
                        <td> $10,000.00 </td>
                        <td></td>
                        <td> $16,000.00 </td>
                        <td></td>
                        <td> $16,000.00 </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Sump Pump/Tank Maintenance</td>
                        <td> $3,000.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Lift Maintenance</td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $4,500.00 </td>
                        <td></td>
                        <td> $- </td>
                        <td></td>
                        <td> $- </td>
                    </tr>                    
                </tbody>
            </Table>
        )
    }
    return (
        <>
            {props.showFull && <h2 className="text-center">Owners Corporations Budget</h2>}
            {props.showFull ? fullTable() : halfTable()}
        </>
    );
};

export default OwnersCooporation;
