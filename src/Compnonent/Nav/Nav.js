 
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import Left from '../Left/Left';
import Right from '../Right/Right';
import { useEffect, useState } from 'react';
import Question from '../../Question/Question';

const Nav = () => {
const [Compnonents,setComponent] = useState([])
const [cart,setCart] = useState([])
useEffect(()=>{
  fetch('generated.json')
  .then(res=>res.json())
  .then(data=>setComponent(data))
},)

const handleAddToList = (item) => {
  const newCart= [...cart,item];
  setCart(newCart)
}
  return (
    <div>
      <div className='nav'> 
      <FontAwesomeIcon className='icon' icon={faPersonRunning}></FontAwesomeIcon>
      <h1 className='name'>Morning Running Club: {cart.length}</h1>
    </div>
    <div className='display'>
     <div className='data'>
     {
        Compnonents.map(item=>
          <Left
          key={item._id}
          item={item}
          handleAddToList={handleAddToList}
          ></Left>)
         
      }
     </div>
      <Right cart={cart}></Right>
    </div>
    <Question></Question>
    </div>
  );
};

export default Nav;