import React from "react";
import { tabContent } from "../../data/Content";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useGlobalContext } from "../../contexts/GlobalContext";

const CommercialDropdown = (props) => {
    const { unitData, setUnitData, setMapIndex } = useGlobalContext();

    const handleClick = (index) => {
        setUnitData(tabContent[index])
        setMapIndex(index);
    }

    return (
        <DropdownButton id="dropdown-commercial-button" title={unitData.title}>
            {tabContent.map((item, index) => {
                return (
                    <Dropdown.Item
                        key={index}
                        className={`dropdown-item com-dropdown`}
                        role="button"
                        onClick={() => handleClick(index)}
                    >
                        {item.title}
                    </Dropdown.Item>
                );
            })}
        </DropdownButton>
    );
};

export default CommercialDropdown;
