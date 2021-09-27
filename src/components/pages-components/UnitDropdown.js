import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useGlobalContext } from '../../contexts/GlobalContext';

const UnitDropdown = (props) => {
  const { setUnitMapIndex } = useGlobalContext();
  const unitData = props.type;

  return (
    <DropdownButton id='dropdown-basic-button' title='Dropdown button'>      
      {unitData.map((unit, index) => {
        return (
          <Dropdown.Item
            key={unit.unit_id}
            className={`${unit.sold ? 'dropdown-item sold' : 'dropdown-item'}`}
            role='button'
            onClick={() => setUnitMapIndex(index)}
          >
            {unit.sold ? unit.unit_number + ' (sold)' : unit.unit_number }
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
}

export default UnitDropdown;
