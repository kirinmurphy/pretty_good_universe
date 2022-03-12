import { useEffect, useReducer } from "react";

import '../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { YoutubePlayerWrapper } from "./videoPlayerStyles";

import { 
  videoPlayerReducer, 
  VIDEO_PLAYER_INIT,
  VIDEO_PLAYER_ACTION_BACK,
  VIDEO_PLAYER_ACTION_NEXT 
} from "./videoPlayerReducer";

export function YoutubePlayer ({ videos, artist }) {
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
  !videos[activeIndex] 
    ? console.log( "!!!!BUSTED!!!!!! Video", artist?.name, " videoId", videos)
    : console.log( 'activeVideoId: ', videos[activeIndex].videoId);
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
    <YoutubePlayerWrapper>
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
          <span className="link back" onClick={goBack}>
            <FontAwesomeIcon icon={['fas', 'caret-left']} />
          </span>

          <span className="link next" onClick={goNext}>
            <span>Next</span>
            <FontAwesomeIcon icon={['fas', 'caret-right']} />
          </span>
        </div>
      )}
    </YoutubePlayerWrapper>
  );
}

function getIframeSrc (autoPlay, videoId) {
  const iframeUrl = 'https://www.youtube.com/embed/';
  return `${iframeUrl}${videoId}?autoplay=${autoPlay}`;
}
