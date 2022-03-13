import { useEffect, useReducer } from "react";
import YouTube from "react-youtube";

import '../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { YoutubePlayerWrapper } from "./videoPlayerStyles";

import { 
  videoPlayerReducer, 
  VIDEO_PLAYER_INIT,
  VIDEO_PLAYER_ACTION_BACK,
  VIDEO_PLAYER_ACTION_NEXT,
  VIDEO_PLAYER_ACTION_AUTO_GO_NEXT
} from "./videoPlayerReducer";

export function YoutubePlayer ({ videos }) {
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

  const currentVideoId = videos[activeIndex]?.videoId;

  const goBack = () => dispatch({ 
    type: VIDEO_PLAYER_ACTION_BACK, 
    videoCount: videos.length, 
  });

  const goNext = () => dispatch({ 
    type: VIDEO_PLAYER_ACTION_NEXT, 
    videoCount: videos.length, 
  });

  const autoGoNext = (e) => dispatch({
    type: VIDEO_PLAYER_ACTION_AUTO_GO_NEXT,
    videoCount: videos.length,
    jumpToNextThingCallback: () => {
      console.log('next!');
    }
  });

  return (
    <YoutubePlayerWrapper>
      <div className="video-wrapper">
        <YouTube
          videoId={currentVideoId}
          // containerClassName="embed embed-youtube"
          // onStateChange={(e) => console.log('e', e)}
          onEnd={autoGoNext}
          opts={{
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: autoPlay
            }
          }}
        />
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
