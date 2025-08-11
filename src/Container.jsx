// import React from 'react'
// import VideoPlayer from './VideoPlayer'
// import VideoList from './VideoList'
// import "./App.css"

// const Container = ({state,vid,fun}) => {

//   return (
//     <div>
//       <article id='main_container'>
//         <aside id='video_container'>
//             <VideoPlayer vid={vid}></VideoPlayer>
//         </aside>
//         {/* ========================================================================================== */}
//         <aside id='img_container'>{
//             state.map((lio)=>{
//                 return <VideoList className="video-list-item" fun={fun} lio={lio}></VideoList>
//             })
//         }
//         </aside>
//       </article>
//     </div>
//   )
// }

// export default Container

import React from 'react';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

const Container = ({ state, vid, fun }) => {
  return (
    <>
      <div className="main-wrapper">
        <article className="main-container">
          <aside className="video-section">
            <VideoPlayer vid={vid} />
          </aside>

          <aside className="recommendation-section">
            {state.map((lio, index) => (
              <VideoList key={index} fun={fun} lio={lio} />
            ))}
          </aside>
        </article>
      </div>

      <style>
        {`
          .main-wrapper {
            background-color: #0f0f0f;
            min-height: 100vh;
            padding: 20px;
            color: white;
            box-sizing: border-box;
          }

          .main-container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }

          .video-section {
            flex: 2;
            min-width: 60%;
          }

          .recommendation-section {
            flex: 1;
            min-width: 320px;
            max-height: 120vh;
            overflow-y: auto;
          }

          /* Optional: smooth scroll effect */
          .recommendation-section::-webkit-scrollbar {
            width: 8px;
          }

          .recommendation-section::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 10px;
          }

          .recommendation-section::-webkit-scrollbar-track {
            background: transparent;
          }
        `}
      </style>
    </>
  );
};

export default Container;
