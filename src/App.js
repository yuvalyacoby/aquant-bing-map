import React from 'react';
import './App.css';
import BingMap from './componenets/BingMap';
import MapForm from './componenets/MapForm';

const App = () => {
  return (
    <div className='wrapper'>
      <MapForm />
      <BingMap />
    </div>
  );
};

export default App;
