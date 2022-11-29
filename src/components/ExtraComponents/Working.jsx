import React from 'react'
import working from '../../assets/images/working.gif';
 
function Working() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{width:'100%',height:'70vh'}}>
        <img src={working} alt="Street Thenics" style={{width:'50%'}} />
        <p>Working on it...</p>
    </div>
  )
}

export default Working