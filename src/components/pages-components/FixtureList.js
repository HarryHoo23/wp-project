import React from 'react';
import Fixture from './Fixture';
import Title from './Title';

const FixtureList = (props) => {
  const { type, items } = props;
  return (
    <div className={`fixture-modal-body ${type}`}>
      <div className='fixture-container'>
        <Title
          colorClassName=''
          firstHalfTitle={`${type}`}
          secondHalfTitle=''
        />
        <div className='fixture-list'>
          {items.map((fixture, index) => {
            return <Fixture fixture={fixture} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FixtureList;
