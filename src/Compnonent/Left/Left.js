import React from 'react';
import './Left.css'
const Left = ({item}) => {
 
  const {name, picture,time} = item;
  
  return (
    <div className='card'>
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <h5>{time}</h5>
      <div className='btn-container'>
      <button className='btn'>Add to list</button>
      </div>
    </div>
  );
};

export default Left;