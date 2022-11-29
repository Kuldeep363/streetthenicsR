import React from 'react'
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Working from '../ExtraComponents/Working';

function CalisthenicsBeginner() {
  let [activeBtn] = useOutletContext();
  useEffect(()=>{
    document.title = 'Beginner calisthenics exercises -Street Thenics| Best beginner exercises | calisthenics beginner exercises';
    activeBtn('beginner');
  },[])
  return (
    <Working/>
  )
}

export default CalisthenicsBeginner