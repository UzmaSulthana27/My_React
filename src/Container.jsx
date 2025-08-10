import React from 'react'
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'
import "./App.css"

const Container = ({state,vid,fun}) => {

  return (
    <div>
      <article id='main_container'>
        <aside id='video_container'>
            <VideoPlayer vid={vid}></VideoPlayer>
        </aside>
        {/* ========================================================================================== */}
        <aside id='img_container'>{
            state.map((lio)=>{
                return <VideoList className="video-list-item" fun={fun} lio={lio}></VideoList>
            })
        }
        </aside>
      </article>
    </div>
  )
}

export default Container
