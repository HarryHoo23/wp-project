// import React from 'react';
// import { Link } from 'react-router-dom';
// import { DropdownButton } from 'react-bootstrap';

// const UnitDropdown = (props) => {
//   const sitePlanData = props.type;
//   return (
//     <DropdownButton id='dropdown-basic-button' title='Dropdown button'>      
//       {sitePlanData.map((unitLink) => {
//         return (
//           <Link
//             key={unitLink.unit_id}
//             className={`${unitLink.sold ? 'dropdown-item sold' : 'dropdown-item'}`}
//             role='button'
//             to={`/unit/${unitLink.unit_id}`}
//           >
//             {unitLink.sold ? unitLink.unit_number + ' (sold)' : unitLink.unit_number }
//           </Link>
//         );
//       })}
//     </DropdownButton>
//   );
// }

// export default UnitDropdown;
