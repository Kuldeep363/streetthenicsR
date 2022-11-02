import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

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
            <img src="https://drive.google.com/uc?id=1hyJg6ILBt_0T2L-f06i4-GnrRQ6JJ_YN" alt="muscle gain tips- street thenics"/>
            :
            (
                btn === 'diet'?
                <img src="https://drive.google.com/uc?id=1vDaVHdMwtnKNW9X7pf6UX3zMf-WaQ4rJ" alt="muscle gain diet- street thenics"/>
                :
                <img src="https://drive.google.com/uc?id=11hTNdwVkPJYYyJJKY8SFscg87zJmoUNZ" alt="muscle gain exercise-- street thenics"/>
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