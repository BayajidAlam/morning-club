import React from 'react';
import './Left.css'
const Left = ({item,handleAddToList}) => {
 
const {name, picture,time} = item;
  
  return (
    <div className='card'>
      <img src={picture} alt="" />
      <h4>Event- {name}</h4>
      <h5>Duration: {time} s</h5>
      <div className='btn-container'>
      <button onClick={()=>handleAddToList(item)} className='btn'>Add to list</button>
      </div>
    </div>
  );
};

export default Left;