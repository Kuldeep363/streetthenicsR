import React from 'react'
import working from '../../assets/images/working.gif';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
function Working() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{width:'100%',height:'300px'}}>
        <LazyLoadImage effect='blur' src={working} alt="Street Thenics" height={'90%'} />
        <p>Working on it...</p>
    </div>
  )
}

export default Working