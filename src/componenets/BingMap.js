import React from 'react';
import { ReactBingmaps } from 'react-bingmaps';

const BingMap = () => {
  return (
    <div className='map-wrapper'>
      <ReactBingmaps
        bingmapKey='Ajpth3bKmJjnCjywlZfR5joLB8wnJnfHn7Qu_N0UHKNc-lR3Q7eOGUpGjIfB6VHP'
        center={[13.0827, 80.2707]}
      ></ReactBingmaps>
    </div>
  );
};

export default BingMap;
