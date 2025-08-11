// import React from 'react'
// import "./App.css"

// const VideoList = (props) => {
//     // console.log(props.img);

//     let {thumbnailUrl,title}=props.lio;

//   return (
//     <div>
//       <div className="video-list-item" onClick={()=>{props.fun(props.lio)}}>
//         <img id='img' src={thumbnailUrl} alt="" />
//         <h1 id='h1'>{title}</h1>
//       </div>
//     </div>
//   )
// }

// export default VideoList

import React from 'react';

const VideoList = ({ lio, fun }) => {
  // Destructure API props with fallback defaults
  const {
    thumbnailUrl,
    title,
    author,      // channel name
    subscriber,  // subscriber count
    duration,
    views,
    uploadTime,
  } = lio;

  return (
    <>
      <div className="recommendation-item" onClick={() => fun(lio)} title={title}>
        <img className="thumbnail" src={thumbnailUrl} alt={title} />

        <div className="video-details">
          <h3 className="video-title">{title}</h3>
          <p className="video-channel">{author || "Unknown Channel"}</p>
          <p className="video-stats">
            {views ? views + " views" : "No views"} • {uploadTime || "Unknown date"}
          </p>
          <p className="video-subs">{subscriber || ""}</p>
        </div>
      </div>

      <style>{`
        .recommendation-item {
          display: flex;
          cursor: pointer;
          margin-bottom: 16px;
          padding-right: 10px;
          transition: background-color 0.2s ease, transform 0.2s ease;
          border-radius: 4px;
        }
        .recommendation-item:hover {
          background-color: #1f1f1f;
          transform: scale(1.03);
        }

        .thumbnail {
          width: 168px;
          height: 94px;
          object-fit: cover;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .video-details {
          display: flex;
          flex-direction: column;
          margin-left: 12px;
          justify-content: center;
          flex: 1;
          overflow: hidden;
        }

        .video-title {
          font-size: 14px;
          color: #fff;
          margin: 0 0 4px 0;
          line-height: 1.3;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .video-channel {
          font-size: 12px;
          color: #aaa;
          margin: 0;
          font-weight: 400;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .video-stats {
          font-size: 12px;
          color: #888;
          margin: 2px 0 0 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .video-subs {
          font-size: 11px;
          color: #3ea6ff;
          margin-top: 4px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </>
  );
};

export default VideoList;
