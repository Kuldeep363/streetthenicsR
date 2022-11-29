import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import Working from '../ExtraComponents/Working';

function CalisthenicsIntermediate() {
  let [activeBtn] = useOutletContext();
  useEffect(()=>{
    document.title = 'Intermediate calisthenics exercises -Street Thenics| Best intermediate exercises | calisthenics intermediate exercises';
    activeBtn('intermediate');
  },[])
  return (
    <Working/>
  )
}

export default CalisthenicsIntermediate