import React from 'react';
import './Right.css';
import img from '../../img/j.jpg'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Right = ({cart,breaks,handleInitial,handleBtnOne,handleBtnTwo,handleBtnThree,handleBtnFour}) => {

   const notify = () =>toast('Wow,you are done!')

   let totalTime = 0;
   for(const single of cart){
      totalTime = totalTime + single.time;
   }
  return (
   <div className='right-side'>

   <ToastContainer/>

      <div className='position-stickey'>

          <div className='direcor-info'>

             <img className='director-pic' src={img} alt="" />
             <div>
                 <h1>Bayajid Alam Juyel</h1>
                 <h4>Director,Morning Runnig Club</h4>
              </div>
              
              </div>
              <h4 className='txt'>Add a Break</h4>
              <div className='options'> 
                 <div className='time-option'>
                 <p onClick={()=>handleInitial()}>10s</p>
                  <p onClick={()=>handleBtnOne()}>20s</p>
                  <p onClick={()=>handleBtnTwo()}>30s</p>
                  <p onClick={()=>handleBtnThree()}>40s</p>
                   <p onClick={()=>handleBtnFour()}>50s</p>
                 </div>
              </div>
              <div className='runnig-details'>
          <h4 className='detail'>Runnig Details</h4>
          <div className='ex-time'>
            <h4>Runnig time</h4>
            <p>{totalTime}seconds</p>
          </div>
          <div className='br-time'>
          <h4>Break time <span>{breaks}</span></h4>
            <p></p>
          </div>
          </div>
          <div className='btn-activity'>
            <button onClick={notify}>Activity Completed</button>
                     
          </div>
          
           </div>
       </div>
     
   )
   
}
export default Right;