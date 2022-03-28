export const VIDEO_PLAYER_INIT = 'initVideo'; 
export const VIDEO_PLAYER_ACTION_BACK = 'back';
export const VIDEO_PLAYER_ACTION_NEXT = 'next';
export const VIDEO_PLAYER_ACTION_ON_PLAYLIST_END = 'autoGoNext';
export const VIDEO_PLAYER_ACTION_ON_PLAY = 'onPlay';
export const VIDEO_PLAYER_ACTION_ON_PAUSE = 'onPause';

export function videoPlayerReducer (state, action) {
  const { activeIndex } = state;

  const isAtLastVid = () => {
    return activeIndex === action.videoCount - 1;
  }

  switch (action.type) {
    case VIDEO_PLAYER_INIT: 
      return {
        ...state,
        activeIndex: 0,
        playTriggerCount: 0
      };

    case VIDEO_PLAYER_ACTION_ON_PLAY: 
      return {
        ...state,
        autoPlay: true,
        playTriggerCount: state.playTriggerCount + 1,
      }

    case VIDEO_PLAYER_ACTION_ON_PAUSE: 
      return {
        ...state,
        autoPlay: false
      }

      case VIDEO_PLAYER_ACTION_BACK: 
      const atFirstVid = activeIndex === 0;
      const newBackIndex = atFirstVid ? action.videoCount - 1 : activeIndex - 1;
      return {
        ...state,
        activeIndex: newBackIndex,
        autoPlay: true
      };

    case VIDEO_PLAYER_ACTION_NEXT:      
      const newNextIndex = isAtLastVid() ? 0 : activeIndex + 1;

      return {
        ...state,
        activeIndex: newNextIndex,
        autoPlay: true
      };

    case VIDEO_PLAYER_ACTION_ON_PLAYLIST_END:
      const atLastVid = isAtLastVid();
      
      if ( atLastVid ) {
        action.onPlaylistEnd()
        return {
          ...state,
          autoplay: true
        };
      }

      return {
        ...state,
        activeIndex: activeIndex + 1,
        autoPlay: true
      };

    
  
    default:  throw new Error();
  }
}

