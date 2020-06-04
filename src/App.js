import React, { useState } from 'react';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps';

const App = () => {
  const [coords, setCoords] = useState([]);

  const AddPushPinOnClick = location => {
    const lat = location.latitude;
    const lon = location.longitude;

    setCoords(coords.push([lat, lon]));
  };

  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        {' '}
        <form className='form'>
          <div className='form-group'>
            <label htmlFor='coords'>Add Coords</label>
            <input
              className='form-control'
              type='text'
              placeholder='Set lat coords'
              name='lat'
              required
            />
            <input
              className='form-control'
              type='text'
              placeholder='Set lon coords'
              name='lon'
              required
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Submit' />
        </form>
      </div>
      <div className='map-wrapper'>
        <ReactBingmaps
          bingmapKey='Ajpth3bKmJjnCjywlZfR5joLB8wnJnfHn7Qu_N0UHKNc-lR3Q7eOGUpGjIfB6VHP'
          center={[32.109, 34.855]}
          getLocation={{ addHandler: 'click', callback: AddPushPinOnClick }}
          polyline={{
            location: [{ coords }],
            option: {
              strokeColor: 'red',
              strokeThickness: 2,
              strokeDashArray: [1, 2, 5, 10]
            }
          }}
        ></ReactBingmaps>
      </div>
    </div>
  );
};

export default App;
