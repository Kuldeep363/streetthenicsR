import React from 'react'
import './SkeletonLoading.css';

function FitnesSkeletonLoading() {
  return (
    <div className='d-flex justify-content-center align-items'>
        <div className="sk-card anim"></div>
        <div className="sk-card anim"></div>
        <div className="sk-card anim"></div>
        <div className="sk-card anim"></div>
    </div>
  )
}

export default FitnesSkeletonLoading