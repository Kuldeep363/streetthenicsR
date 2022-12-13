import React, { useState, Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import weightLossTips from '../assets/images/weight-loss.png';
import weightLossDiet from '../assets/images/w-l-diet.png';
import weightLossExercises from '../assets/images/w-l-exercise.png';
import SkeletonLoading from '../components/ExtraComponents/SkeletonLoading';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Weightloss() {
    let [btn, setBtn] = useState('tips');
    const activeBtn = (btnText)=>{
        setBtn(btnText);
    }
  return (
    <div className="myContainer weight-loss m-top">
      <div className="banner">
        {
            btn === 'tips'?
            <LazyLoadImage effect='blur' src={weightLossTips} alt="weight loss - street thenics" />
            :
            (
                btn === 'diet'?
                <LazyLoadImage effect='blur' src={weightLossDiet} alt="weight loss diets - street thenics" />
                :
                <LazyLoadImage effect='blur' src={weightLossExercises} alt="weight loss exercises - street thenics" />
            )
        }
        
    </div>

    <div className="buttons mt-3 d-flex justify-content-center">
        <div className="d-flex m-0">
            <div className="text-center m-2 ">
                <Link to="tips"  style={{pointerEvents: btn==='tips'?'none':'all'}}>
                    <div className={`${btn === 'tips'? 'primary-btn':'disable-btn'}`} style={{width:"100px"}}>
                        Tips
                    </div>
                </Link>
            </div>
            <div className="text-center m-2">
                <Link to="diet"  style={{pointerEvents: btn==='diet'?'none':'all'}}>
                    <div className={`${btn === 'diet'? 'primary-btn':'disable-btn'}`} style={{width:'100px'}}>
                        Diet
                    </div>
                </Link>
            </div>
            <div className="text-center m-2">
                <Link to="exercises"  style={{pointerEvents: btn==='exercises'?'none':'all'}}>
                    <div className={`${btn === 'exercises'? 'primary-btn':'disable-btn'}`} style={{width:'100px'}}>
                        Exercises
                    </div>
                </Link>
            </div>
        </div>
    </div>
    <Suspense fallback={<SkeletonLoading/>}>
        <Outlet context={[activeBtn]} />
    </Suspense>
    </div>
  )
}

export default Weightloss
