import { useReducer } from "react";

import '../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { 
  videoPlayerReducer, 
  VIDEO_PLAYER_ACTION_BACK, 
  VIDEO_PLAYER_ACTION_NEXT 
} from "../utils/videoPlayerReducer";

import { YoutubeVidsWrapper } from '../styles/YoutubeVidsWrapper';

export function YoutubeVids ({ videos }) {

  const initialVideoPlayerProps = {
    autoPlay: false, 
    activeIndex: 0,
    videoCount: videos.length
  };

  const [
    { autoPlay, activeIndex }, 
    dispatch
  ] = useReducer(videoPlayerReducer, initialVideoPlayerProps);

  const currentVideoId = videos[activeIndex].videoId;

  const goBack = () => dispatch({ type: VIDEO_PLAYER_ACTION_BACK });
  const goNext = () => dispatch({ type: VIDEO_PLAYER_ACTION_NEXT });
  
  return (
    <YoutubeVidsWrapper>
      <div className="video-wrapper">
        <iframe 
          src={getIframeSrc(autoPlay, currentVideoId)} 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-actions">
        <span className="back" onClick={goBack}>
          &nbsp;<FontAwesomeIcon icon={['fas', 'caret-left']} size="sm" />
        </span>

        <span className="next" onClick={goNext}>
          Next Video
          <FontAwesomeIcon icon={['fas', 'caret-right']} size="sm" />
        </span>
      </div>    
    </YoutubeVidsWrapper>
  );
}

function getIframeSrc (autoPlay, videoId) {
  const iframeUrl = 'https://www.youtube.com/embed/';
  return `${iframeUrl}${videoId}?autoplay=${autoPlay}`;
}
