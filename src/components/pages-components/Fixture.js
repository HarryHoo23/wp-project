import React from 'react';

const Fixture = ({ fixture }) => {
  return (
    <div className={`fitting flip`}>
      <h6 className='fitting-title'>{fixture.item}</h6>
      <ul className='fitting-info'>
        <li>{fixture.description}</li>
        <li className={`${fixture.notes ? '' : 'last-li'}`}>
          {fixture.colour}
        </li>
        {fixture.notes && <li className='last-li'>{fixture.notes}</li>}        
        <img src={fixture.img} alt="img" className="fitting-overlay" />              
      </ul>
    </div>
  );
}

export default Fixture;
