import React, { useState } from 'react';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps';

const App = () => {
  const [coords, setCoords] = useState([]);
  const [formData, setFormData] = useState({
    lat: null,
    lon: null
  });
  const [pins, setPins] = useState([]);

  const AddPushPinOnClick = location => {
    const lat = location.latitude;
    const lon = location.longitude;

    setPins([
      {
        location: [lat, lon],
        option: { color: 'red' }
      }
    ]);

    setCoords([lat, lon]);
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    setCoords(coords);
  };

  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        {' '}
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <label htmlFor='coords'>Add Coords</label>
            <input
              id='lat'
              className='form-control'
              type='text'
              placeholder='Set lat coords'
              name='lat'
              required
              onChange={e => onChange(e)}
            />
            <input
              id='lon'
              className='form-control'
              type='text'
              placeholder='Set lon coords'
              name='lon'
              required
              onChange={e => onChange(e)}
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
          pushPins={{ pins }}
          polyline={{
            location: [{ coords }],
            option: {
              strokeColor: 'red',
              strokeThickness: 2,
              strokeDashArray: [1, 2, 5, 10]
            }
          }}
          regularPolygons={[
            {
              location: [
                [32.109, 34.855],
                [32.183416374705835, 35.015278620157716],
                [32.279834579829654, 35.049607563935]
              ],
              option: { fillColor: 'green', strokeThickness: 2 }
            }
          ]}
        ></ReactBingmaps>
      </div>
    </div>
  );
};

export default App;
