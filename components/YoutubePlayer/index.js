import { useState, useEffect, useReducer } from "react";
import YouTube from "react-youtube";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

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
import { Popupizer } from "codethings-react-ui";

export function YoutubePlayer ({ videos, onPlaylistEnd }) {
  const initialVideoPlayerProps = {
    autoPlay: false, 
  };

  const [
    { autoPlay, activeIndex, playTriggerCount }, 
    dispatch
  ] = useReducer(videoPlayerReducer, initialVideoPlayerProps);

  const [autoplayNoticeSeen, setAutoplayNoticeSeen] = useState(false);

  useEffect(() => {
    dispatch({ type: VIDEO_PLAYER_INIT })
  }, [videos]);

  console.log('!!!!!!PTC', playTriggerCount);

  const currentVideoId = videos[activeIndex]?.videoId;

  const hasDisabledAutoPayNotice = shouldShowDisabledAutopayNotice(playTriggerCount)

  return (
    <>
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
              <FontAwesomeIcon icon={faCaretLeft} />
            </span>

            <span className="link next"
              onClick={() => dispatch({ 
                type: VIDEO_PLAYER_ACTION_NEXT, 
                videoCount: videos.length, 
              })}
            >
              <FontAwesomeIcon icon={faCaretRight} />
            </span>
          </div>
        )}
      </YoutubePlayerWrapper>
      
      {!autoplayNoticeSeen && hasDisabledAutoPayNotice && (
        <Popupizer closeAction={() => { setAutoplayNoticeSeen(true) }}>
        {/* <Popupizer> */}
          Popup Content
        </Popupizer>
      )}
    </>
  );
}

function shouldShowDisabledAutopayNotice (playTriggerCount) {
  const enoughPlays = playTriggerCount == 3
  console.log('playTriggerCount', playTriggerCount)
  return enoughPlays; 
}