// import React from 'react'
// import "./App.css"

// const VideoPlayer = ({vid}) => {
//   return (
//     <div>
//       <video id='video' src={vid} height={1000} width={1000} controls autoPlay muted></video>
//     </div>
//   )
// }

// export default VideoPlayer

import React from "react";

const VideoPlayer = ({ vid }) => {
  if (!vid) return null;

  const { videoUrl, title, views, uploadTime, author, subscriber } = vid;

  return (
    <>
      <div className="video-player-container">
        <div className="video-wrapper">
          <video className="video-player" src={videoUrl} controls autoPlay muted />
          <div className="video-overlay top-overlay">
            <h3 className="overlay-title" title={title}>{title}</h3>
            <p className="overlay-meta">{views} views • {uploadTime}</p>
          </div>
        </div>

        {/* Below video: Title */}
        {/* <h2 className="video-title">{title}</h2> */}

        {/* Views and Upload Time row */}
        <div className="video-stats-row">
          <span className="views">{views} views</span>
          <span className="upload-time">{uploadTime}</span>
        </div>

        {/* Channel and buttons row */}
        <div className="channel-row">
          <div className="channel-info">
            <span className="channel-name">{author}</span>
            <span className="subscriber-count">{subscriber}</span>
          </div>

          <div className="channel-actions">
            <button className="btn share-btn">Share</button>
            <button className="btn subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <style>{`
        .video-player-container {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          color: white;
          font-family: 'Roboto', sans-serif;
        }

        .video-wrapper {
          position: relative;
          padding-top: 56.25%; /* 16:9 aspect ratio */
          background: black;
          border-radius: 8px;
          overflow: hidden;
        }

        .video-player {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-overlay.top-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0));
          padding: 12px 16px;
          z-index: 10;
        }

        .overlay-title {
          margin: 0;
          font-weight: 600;
          font-size: 18px;
          line-height: 1.2;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .overlay-meta {
          margin-top: 4px;
          font-size: 14px;
          color: #ccc;
        }

        .video-title {
          margin-top: 16px;
          font-weight: 600;
          font-size: 20px;
          color: white;
        }

        .video-stats-row {
          display: flex;
          justify-content: space-between;
          color: #aaa;
          font-size: 14px;
          margin: 6px 0 20px;
          padding: 0 2px;
        }

        .channel-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #333;
          border-bottom: 1px solid #333;
          padding: 12px 0;
          flex-wrap: wrap;
        }

        .channel-info {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .channel-name {
          font-weight: 600;
          font-size: 16px;
          color: white;
        }

        .subscriber-count {
          font-size: 13px;
          color: #3ea6ff;
          font-weight: 500;
        }

        .channel-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .btn {
          background: #272727;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          transition: background-color 0.2s ease;
          white-space: nowrap;
        }

        .btn:hover {
          background: #3a3a3a;
        }

        .subscribe-btn {
          background: #cc0000;
        }

        /* Responsive tweaks */
        @media (max-width: 480px) {
          .video-player-container {
            max-width: 100%;
            padding: 0 10px;
          }

          .overlay-title {
            font-size: 16px;
          }

          .overlay-meta {
            font-size: 12px;
          }

          .video-title {
            font-size: 18px;
          }

          .video-stats-row {
            font-size: 12px;
            margin-bottom: 12px;
          }

          .channel-row {
            flex-direction: row;
            justify-content: space-between;
            padding: 8px 0;
          }

          .channel-info {
            gap: 8px;
          }

          .channel-actions {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
};

export default VideoPlayer;
