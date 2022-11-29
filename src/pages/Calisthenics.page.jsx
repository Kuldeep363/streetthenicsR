import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

function Calisthenics() {
    let [btn, setBtn] = useState('');
    const activeBtn = (btnText)=>{
        setBtn(btnText);
    }
  return (
    <div className="myContainer weight-loss m-top">
      {/* <div className="banner">
        <img src={muscleGainTips} alt="muscle gain tips- street thenics"/>
    </div> */}

        <div className="buttons mt-3 d-flex justify-content-center">
            <div className="d-flex m-0">
                <div className="text-center m-2 ">
                    <Link to="beginner"  style={{pointerEvents: btn==='beginner'?'none':'all'}}>
                        <div className={`${btn === 'beginner'? 'primary-btn':'disable-btn'}`} style={{minWidth:'100px'}}>
                            Beginner
                        </div>
                    </Link>
                </div>
                <div className="text-center m-2">
                    <Link to="intermediate"  style={{pointerEvents: btn==='intermediate'?'none':'all'}}>
                        <div className={`${btn === 'intermediate'? 'primary-btn':'disable-btn'}`} style={{minWidth:'100px'}}>
                            Intermediate
                        </div>
                    </Link>
                </div>
                <div className="text-center m-2">
                    <Link to="advance"  style={{pointerEvents: btn==='advance'?'none':'all'}}>
                        <div className={`${btn === 'advance'? 'primary-btn':'disable-btn'}`} style={{minWidth:'100px'}}>
                            Advance
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <Outlet context={[activeBtn]} />
    </div>
  )
}

export default Calisthenics