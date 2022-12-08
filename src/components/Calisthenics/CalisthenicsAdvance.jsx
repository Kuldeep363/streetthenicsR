import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import Working from '../ExtraComponents/Working';

function CalisthenicsAdvance() {
  let [activeBtn] = useOutletContext();
  useEffect(()=>{
    document.title = 'Advance calisthenics exercises -Street Thenics| Best advance exercises | calisthenics advance exercises';
    activeBtn('advance');
  },[])
  return (
    <Working/> 
  )
}

export default CalisthenicsAdvance