import React from 'react'
import { useSelector } from 'react-redux';
import { selectGender } from '../../Redux/reducers/reducers';

import imgFallback from '../../assets/images/fallback-img.png';

function ExerciseSection({exData}) {
  const gender = useSelector(selectGender);
  const {name, sets, summary, imgM1, imgM2, imgF1, imgF2, instructions} = exData;



  const setFallbackImg = (e)=>{
    e.onerror = null;
    e.target.src = imgFallback;
  }
  return (
    <div>
      <div className="mt-3">
    <h1 style={{fontWeight: "700",color: "var(--red)",textTransform: "capitalize"}}>{name}</h1>
    <h2 style={{textTransform: "capitalize"}}>
      <small>
        <p >
          {sets}
        </p>
      </small>
    </h2>
    <h2 className="mt-3 mb-2">
      {summary}
    </h2>
     {/* <div className="video mt-3 mb-2" style="position: relative;">
      <iframe  src={{exercise.video_link}} title="Street Thenics Exercises" frameborder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="video-loader"></div>
    </div>  */}
    <div className="m-0 mt-3 mb-2 row justify-content-center">
      { gender === "male"?
        <><div className="ex-img col-6">
          <img src={imgM1} alt={name} onError={(e)=>setFallbackImg(e)} loading='lazy' />
        </div>
        <div className="ex-img col-6">
          <img src={imgM2} alt={name} onError={(e)=>setFallbackImg(e)} loading='lazy'  />
        </div></>
       :
        <><div className="ex-img col-6">
          <img src={imgF1} alt={name} onError={(e)=>setFallbackImg(e)} loading='lazy'  />
        </div>
        <div className="ex-img col-6">
          <img src={imgF2} alt={name} onError={(e)=>setFallbackImg(e)} loading='lazy'  />
        </div></>

      }
    </div>
  </div>
  { instructions ?
        (<div className="mt-2">
          <h2 style={{fontSize: "22px"}}>Directions</h2>
          <h2 className="mt-2" style={{color: "var(--grey)",paddingLeft: '15px'}}>
            <ol>
              {
                instructions.split(':').map((step,index)=>{
                  return (
                  <li key={index}>
                    {step} <br/><br/>
                  </li>
                  )

                }) 
              }
            </ol>
          </h2>
        </div>)
        :
        null
        
        }

    </div>
  )
}

export default ExerciseSection
