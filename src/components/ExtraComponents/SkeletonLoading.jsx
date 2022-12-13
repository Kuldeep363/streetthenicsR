import React from 'react'
import './SkeletonLoading.css';

function SkeletonLoading() {
  return (
    <div className='mt-5'>
        <div id="sk-animation"></div>
        <div className="sk-heading anim">

        </div>
        <div className="sk-text mt-3 ">
            <div className='anim'></div>
            <div className='anim'></div>
            <div className='anim'></div>
        </div>
    </div>
  )
}

export default SkeletonLoading