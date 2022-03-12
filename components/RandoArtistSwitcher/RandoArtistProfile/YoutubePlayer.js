import { useEffect, useReducer } from "react";
import styled from 'styled-components';

import '../../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function YoutubeVids ({ videos, artist }) {
  console.log('----------------------------');
  const initialVideoPlayerProps = {
    autoPlay: false, 
    activeIndex: 0,
  };

  const [
    { autoPlay, activeIndex }, 
    dispatch
  ] = useReducer(videoPlayerReducer, initialVideoPlayerProps);

  useEffect(() => {
    dispatch({ type: VIDEO_PLAYER_INIT })
  }, [videos]);

  console.group()
  console.log("videos: ", videos.map(video => video.videoId));
  console.log('activeIndex', activeIndex);
 
  if ( !videos[activeIndex] ) { 
    console.log("!!!!BUSTED!!!!!! Video", artist?.name, " videoId", videos);
  } else {
    console.log('activeVideoId: ', videos[activeIndex].videoId)
  }
  
  console.groupEnd()

  const currentVideoId = videos[activeIndex]?.videoId;

  const goBack = () => dispatch({ 
    type: VIDEO_PLAYER_ACTION_BACK, 
    videoCount: videos.length, 
    videos: videos, 
  });

  const goNext = () => dispatch({ 
    type: VIDEO_PLAYER_ACTION_NEXT, 
    videoCount: videos.length, 
    videos: videos, 
  });

  return (
    <YoutubeVidsWrapper>
      <div className="video-wrapper">
        <iframe 
          src={getIframeSrc(autoPlay, currentVideoId)} 
          title="r" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>

      {videos.length > 1 && (
        <div className="video-actions">
          <span className="back" onClick={goBack}>
            &nbsp;<FontAwesomeIcon icon={['fas', 'caret-left']} size="sm" />
          </span>

          <span className="next" onClick={goNext}>
            Next
            <FontAwesomeIcon icon={['fas', 'caret-right']} size="sm" />
          </span>
        </div>
      )}
    </YoutubeVidsWrapper>
  );
}

function getIframeSrc (autoPlay, videoId) {
  const iframeUrl = 'https://www.youtube.com/embed/';
  return `${iframeUrl}${videoId}?autoplay=${autoPlay}`;
}

export const VIDEO_PLAYER_INIT = 'initVideo'; 
export const VIDEO_PLAYER_ACTION_BACK = 'back';
export const VIDEO_PLAYER_ACTION_NEXT = 'next';


export function videoPlayerReducer (state, action) {
  const { activeIndex } = state;

  switch (action.type) {
    case VIDEO_PLAYER_INIT: 
      console.group();
      console.log('VIDEO_PLAYER_INIT');
      console.groupEnd();
      return {
        ...state,
        activeIndex: 0
      };

    case VIDEO_PLAYER_ACTION_BACK: 
      const atFirstVid = activeIndex === 0;
      const newBackIndex = atFirstVid ? action.videoCount - 1 : activeIndex - 1;
      return {
        ...state,
        activeIndex: newBackIndex,
        autoPlay: true
      };

    case VIDEO_PLAYER_ACTION_NEXT:
      console.clear();
      const atLastVid = activeIndex === action.videoCount - 1;
      
      console.group();
      console.log('atLastVid: ', atLastVid);
      console.log("activeIndex: ", activeIndex);
      console.log("videos: ", action.videos.map(video => video.videoId));
      console.log("activeVideoIndex", action.videos[activeIndex]?.videoId);
      console.groupEnd();

      const newNextIndex = atLastVid ? 0 : activeIndex + 1;
      return {
        ...state,
        activeIndex: newNextIndex,
        autoPlay: true
      };

    default:  throw new Error();
  }
}


const YoutubeVidsWrapper = styled.div`
  max-width:800px;
  margin-left: auto;
  margin-right: auto;
  padding-top:1rem;
  .video-wrapper { 
    position:relative;
    height:0; 
    padding:40px 0 56.25% 0; 
    padding-top:40px; 
    overflow:hidden;
    background:#333;
  }

  iframe { 
    position:absolute;
    top:0; 
    left:0; 
    width:100%; 
    height:100%;
  }
  

  .video-actions { 
    display:flex;
    justify-content: space-between;
    margin-bottom:15px;
    span { 
      display:inline-block; 
      padding:.75rem .5rem .5rem .5rem;
      text-transform:uppercase; 
      cursor:pointer;
      font-size:.9rem; 
      color:#eee;
      &:hover { 
        color:#fff; 
      }
      &:active,
      &:hover:active { 
        &, 
        .svg-inline--fa {
          font-weight:bold; 
        }
      }
      .svg-inline--fa {
        display:inline-block;
        position:relative; 
        transform: scale(1.1);
        transform-origin:center center;
      }
      &.back {
        flex:0 0 2.5rem;
        .svg-inline--fa {
          top:6px;
          width:.6rem;
          font-size:.8rem;
        }
      }
      &.next {
        flex: 0 0 170px;
        text-align:right;
        .svg-inline--fa { 
          top:5px;
          width:1.2rem;
          padding-left:10px; 
        }
      }
    }
  }
`;
