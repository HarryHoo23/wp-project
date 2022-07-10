import React from 'react';
import { Table } from "react-bootstrap";
import { investment_table_b1, investment_table_c1, investment_table_e1, investment_table_office, investment_table_a1, investment_table_d1, investment_table_micro } from '../../../data/InvestmentAnalysisTableContent';

const InvestmentAnalysis = ({unitNumber, type}) => {

    const getCorrectTable = (unitNumber, buildingType) => {
        if (buildingType === "strata-office-suites") {
            return investment_table_office();
        } else if (buildingType === "walk-up-office") {
            return investment_table_c1();
        } else if (buildingType === "three-level-hybrid") {
            return investment_table_b1();
        } else if (buildingType === "working-storage") {
            return investment_table_e1();
        } else if (buildingType === "two-level-hybrid") {
            if (unitNumber.includes("A")) {
                return investment_table_a1()
            } else {
                return investment_table_d1();
            }
        } else {
            return investment_table_micro();
        }
    } 

    return (
            <>
            <h2 className="text-center">Investment Analysis {unitNumber}</h2>
                <Table responsive bordered striped hover size="lg" className="depre-table investment mt-5 h-100 w-100">
                    {getCorrectTable(unitNumber, type)}
                </Table>
            </>
    )
}
export default InvestmentAnalysis