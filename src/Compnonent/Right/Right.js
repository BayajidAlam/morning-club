import React from 'react';
import './Right.css';
import img from '../../img/j.jpg'
const Right = () => {
  return (
   <div className='right-side'>

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
                 <p>10s</p>
                  <p>20s</p>
                  <p>30s</p>
                  <p>40s</p>
                   <p>50s</p>
                 </div>
              </div>
              <div className='runnig-details'>
          <h4 className='detail'>Runnig Details</h4>
          <div className='ex-time'>
            <h4>Runnig time</h4>
            <p>200 seconds</p>
          </div>
          <div className='br-time'>
          <h4>Break time</h4>
            <p>15 seconds</p>
          </div>
          </div>
          <div className='btn-activity'>
            <button>Activity Completed</button>
          </div>
           </div>
       </div>
     
   )
}
export default Right;