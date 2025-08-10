import React, { useState } from 'react'
import video from './video.json'
import Container from './Container'
import Navbar from './Navbar'

const App = () => {
    let [state,setState]=useState(video)

    let [vid,setVid]=useState(state[0])

    let handlePlay=(max)=>{
        console.log(max);

        setVid(max.videoUrl)
        
    }
  return (
    <div>
      <Navbar></Navbar>
      <Container fun={handlePlay} state={state} vid={vid}></Container>
    </div>
  )
}

export default App
