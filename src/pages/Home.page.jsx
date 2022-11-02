import React from 'react'
import Body from '../components/Home/Body.component'
import FilterCard from '../components/Home/Filter.component'

function Home() {
  
  return (
    <div id='home'>
      <Body/>
      <FilterCard redirection={false} Hide={false}/>
    </div>
  )
}

export default Home
