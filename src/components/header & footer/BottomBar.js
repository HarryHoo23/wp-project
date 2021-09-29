import React from 'react';

const BottomBar = (props) => {
  return (
    <div className='nav-wrapper wf-breadcrumb-row'>
      <div className='nav-bottom-row'>{props.children}</div>
    </div>
  );
};

export default BottomBar;
