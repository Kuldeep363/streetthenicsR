import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import muscleGainTips from '../assets/images/mg-tips.png';
import muscleGainDiet from '../assets/images/m-g-diet.png';
import muscleGainExercises from '../assets/images/m-g-exercises.png';

function MuscleGain() {
    let [btn, setBtn] = useState('tips');
    const activeBtn = (btnText)=>{
        setBtn(btnText);
    }
  return (
    <div className="myContainer weight-loss m-top">
      <div className="banner">
        {
            btn === 'tips'?
            <img src={muscleGainTips} alt="muscle gain tips- street thenics"/>
            :
            (
                btn === 'diet'?
                <img src={muscleGainDiet} alt="muscle gain diet- street thenics"/>
                :
                <img src={muscleGainExercises} alt="muscle gain exercise-- street thenics"/>
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
    <Outlet context={[activeBtn]} />
    </div>
  )
}

export default MuscleGain