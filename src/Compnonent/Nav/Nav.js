 
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import Left from '../Left/Left';
import Right from '../Right/Right';
import { useEffect, useState } from 'react';
import Question from '../../Question/Question';

const Nav = () => {
const [Compnonent,setComponent] = useState([])
useEffect(()=>{
  fetch('generated.json')
  .then(res=>res.json())
  .then(data=>setComponent(data))
},[])
  return (
    <div>
      <div className='nav'> 
      <FontAwesomeIcon className='icon' icon={faPersonRunning}></FontAwesomeIcon>
      <h1 className='name'>Morning Running Club</h1>
    </div>
    <div className='display'>
     <div className='data'>
     {
        Compnonent.map(item=>
          <Left
          key={item._id}
          item={item}
          ></Left>)
         
      }
     </div>
      <Right></Right>
    </div>
    <Question></Question>
    </div>
  );
};

export default Nav;