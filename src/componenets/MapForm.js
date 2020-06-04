import React from 'react';

const MapForm = () => {
  return (
    <div className='form-wrapper'>
      {' '}
      <form className='form'>
        <div className='form-group'>
          <label htmlFor='place'>Add Place</label>
          <input
            className='form-control'
            type='text'
            placeholder='Set Place'
            name='palce'
            // value={username}
            // onChange={e => onChange(e)}
            required
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Submit' />
      </form>
    </div>
  );
};

export default MapForm;
