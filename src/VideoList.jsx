import React from 'react'
import "./App.css"

const VideoList = (props) => {
    // console.log(props.img);

    let {thumbnailUrl,title}=props.lio;

  return (
    <div>
      <div className="video-list-item" onClick={()=>{props.fun(props.lio)}}>
        <img id='img' src={thumbnailUrl} alt="" />
        <h1 id='h1'>{title}</h1>
      </div>
    </div>
  )
}

export default VideoList
