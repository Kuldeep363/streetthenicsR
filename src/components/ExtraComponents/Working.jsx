import React from 'react'
import working from '../../assets/images/working.gif';
 
function Working() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{width:'100%',height:'300px'}}>
        <img src={working} alt="Street Thenics" style={{height:'100%'}} />
        <p>Working on it...</p>
    </div>
  )
}

export default Working