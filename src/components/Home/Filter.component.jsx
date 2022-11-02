import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './FilterCard.css'
import { ActionTypes } from '../../Redux/actions/actionTypes';
import { selectExerciseType, selectGender } from '../../Redux/reducers/reducers';
import { useNavigate, useParams } from 'react-router-dom';


function FilterCard({redirection,Hide}) {
    const [filterHide, setHide] = useState(Hide)
    const { bPart} = useParams();
    let history = useNavigate();
    const dispatch = useDispatch();
    const gender = useSelector(selectGender);
    const exType = useSelector(selectExerciseType);
    const c = (gender,exType)=>{
        history(`/exercise/${gender}/${exType}/${bPart}`);
    }
    
    const setGender = (c,gender)=>{
        dispatch({type: ActionTypes.changeGender, gender})
        if(redirection){
            c(gender,exType);
        }
    }
    
    const setExerciseType = (exType)=>{
        dispatch({type:ActionTypes.changeExerciseType, exType})
        if(redirection){
            c(gender,exType);
        }
    }

    const handleChange = (e)=>{
        // e.target.
    }

  return (
    <div id="filters-card" className={`d-flex ${filterHide?'hide':''}`}>
        <div id="filters" className="d-flex align-items-center">
            <div className="filter text-center ">
                <div className="text-left">
                    <input type="radio" name="gender" id="m" value="male"  checked={gender==='male'?true:false} onChange={(e)=>handleChange()} />
                    <label htmlFor="m" id="male-label" onClick={()=>setGender(c,'male')}>Male</label>
                    <input type="radio" name="gender" id="f" value="female" checked={gender==='female'?true:false} onChange={(e)=>handleChange()} />
                    <label htmlFor="f" id="female-label" onClick={()=>setGender(c,'female')}>Female</label>
                </div>
        
                <svg width="224" height="1" viewBox="0 0 224 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="224" y2="0.5" stroke="#6E6F78"/>
                </svg>  
                
                <div className="text-left ">
                    <input type="radio" name="e-type" id="gym" value="gym"  onChange={(e)=>handleChange()} checked={exType==='gym'?true:false} />
                    <label htmlFor="gym" onClick={()=>setExerciseType('gym')}>Gym</label>
                    <input type="radio" name="e-type" id="bw" value="bodyweight" onChange={(e)=>handleChange()} checked={exType==='bodyweight'?true:false} />
                    <label htmlFor="bw" onClick={()=>setExerciseType('bodyweight')}>Bodyweight</label>
                    <input type="radio" name="e-type" id="rb" value="resistant-band" onChange={(e)=>handleChange()} checked={exType==='resistant-band'?true:false} />
                    <label htmlFor="rb" onClick={()=>setExerciseType('resistant-band')}>Resistant Band</label>
                </div>
            </div>
        </div>
        <div className="toggle-arrow text-center" id="toggle-btn" onClick={()=>setHide(!filterHide)}>
            <svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.25 21.58L9.18663 14.5167C8.35246 13.6825 8.35246 12.3175 9.18663 11.4833L16.25 4.42001" stroke="#292D32" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>                       
        </div>                
</div> 
  )
}

export default FilterCard
