import React from "react";
import { tabContent } from "../../data/Content";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useGlobalContext } from "../../contexts/GlobalContext";

const CommercialDropdown = () => {
    const { unitData, setUnitData } = useGlobalContext();

    return (
        <DropdownButton id="dropdown-commercial-button" title={unitData.title}>
            {tabContent.map((item, index) => {
                return (
                    <Dropdown.Item
                        key={index}
                        className={`dropdown-item com-dropdown`}
                        role="button"
                        onClick={() => setUnitData(tabContent[index])}
                    >
                        {item.title}
                    </Dropdown.Item>
                );
            })}
        </DropdownButton>
    );
};

export default CommercialDropdown;
