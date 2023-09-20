import React from 'react';

const Limo = ({currentData}) => {
  return (
    <div className='limo'>
        <p>{currentData.name}</p>
        <img src={currentData.image} className='limo-im'/>
    </div>
  )
}

  export default Limo;
  