import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import ExerciseSection from '../components/Exercises/Exercise.component';
import FilterCard from '../components/Home/Filter.component';
import { ActionTypes } from '../Redux/actions/actionTypes';
import DataLoader from '../components/ExtraComponents/DataLoader';

function Exercise() {

    let {gender,exType,bPart} = useParams();
    let dispatch = useDispatch();
    let [data, setData] = useState({exercises:[],description:''})
    let [loadingExercise, setLoadingExercise] = useState(true)

    document.title = `Exercises -Street Thenics| Best ${bPart} ${exType} exercises for ${gender}`
   

    useEffect(()=>{
      dispatch({type: ActionTypes.changeGender, gender});
      dispatch({type:ActionTypes.changeExerciseType, exType});

      let requestData = {
        method: 'post',
        url: 'https://streetthenics.herokuapp.com/api/get-exercises',
        data: {
          exType ,
          bPart
        }
      }
      
      axios(requestData)
      .then((res)=>{
        setData(res.data)
        setLoadingExercise(false)
      })
      .catch((err)=>{
        console.log(err)
      })
      
      return ()=>{
        setLoadingExercise(true)
      }

    },[gender,exType])
  return (
    <div style={{marginTop:'65px'}}> 
        <FilterCard redirection={true} Hide={true}/>
        <div className="container pt-3">
          <h1 style={{fontWeight: '900',fontSize: '24px',textTransform: 'capitalize'}} id="bPart">
            {bPart}
          </h1>
          <h2 style={{fontSize:'14px'}}>
            {
              data.description?data.description:<small>No description available...</small>
            }
          </h2>
          <div className="mt-3 mb-3">
            <div className=" heading-1" >
              <h1 style={{margin: "5px"}}>
                {exType} Exercises
              </h1>
            </div>
          </div>
          {
            loadingExercise?
            <DataLoader/>
            :
            (data.exercises.length > 0? 
            data.exercises.map((exercise,index)=>{
              return (
                <div key={index}>
                    <ExerciseSection exData={exercise} />
                </div>
              )
            })
            :
            <small className='text-center'>
                No exercise found for {bPart} with {exType} ...
            </small>)
          }

    
        </div>
    </div>
  )
}

export default Exercise