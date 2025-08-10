import React from 'react'
import "./App.css"

const VideoPlayer = ({vid}) => {
  return (
    <div>
      <video id='video' src={vid} height={1000} width={1000} controls autoPlay muted></video>
    </div>
  )
}

export default VideoPlayer
