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
  VIDEO_PLAYER_ACTION_ON_PLAYLIST_END,
  VIDEO_PLAYER_ACTION_ON_PLAY,
  VIDEO_PLAYER_ACTION_ON_PAUSE
} from "./videoPlayerReducer";

export function YoutubePlayer ({ videos, onPlaylistEnd }) {
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

  return (
    <YoutubePlayerWrapper>
      <div className="video-wrapper">
        <YouTube
          videoId={currentVideoId}
          onEnd={() => dispatch({
            type: VIDEO_PLAYER_ACTION_ON_PLAYLIST_END,
            videoCount: videos.length,
            onPlaylistEnd
          })}
          onPlay={() => dispatch({ type: VIDEO_PLAYER_ACTION_ON_PLAY })}
          onPause={() => dispatch({ type: VIDEO_PLAYER_ACTION_ON_PAUSE })}
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
          <span className="link back" 
            onClick={() => dispatch({ 
              type: VIDEO_PLAYER_ACTION_BACK, 
              videoCount: videos.length, 
            })}
          >
            <FontAwesomeIcon icon={['fas', 'caret-left']} />
          </span>

          <span className="link next"
             onClick={() => dispatch({ 
              type: VIDEO_PLAYER_ACTION_NEXT, 
              videoCount: videos.length, 
            })}
          >
            <span>Next</span>
            <FontAwesomeIcon icon={['fas', 'caret-right']} />
          </span>
        </div>
      )}
    </YoutubePlayerWrapper>
  );
}
