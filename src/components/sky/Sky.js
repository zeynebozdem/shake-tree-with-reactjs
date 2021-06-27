import React from 'react';
import './_sky.scss';
import Sun from '../sun/Sun';
import Cloud from '../cloud/Cloud';

function Sky() {
  return (
    <div className="sky">
      <Cloud />
      <Cloud />
      <Sun />
    </div>
  );
}

export default Sky;
