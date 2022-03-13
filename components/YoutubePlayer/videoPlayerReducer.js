export const VIDEO_PLAYER_INIT = 'initVideo'; 
export const VIDEO_PLAYER_ACTION_BACK = 'back';
export const VIDEO_PLAYER_ACTION_NEXT = 'next';
export const VIDEO_PLAYER_ACTION_AUTO_GO_NEXT = 'autoGoNext';

export function videoPlayerReducer (state, action) {
  const { activeIndex } = state;

  const isAtLastVid = () => {
    return activeIndex === action.videoCount - 1;
  }

  switch (action.type) {
    case VIDEO_PLAYER_INIT: 
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
      const newNextIndex = isAtLastVid() ? 0 : activeIndex + 1;

      return {
        ...state,
        activeIndex: newNextIndex,
        autoPlay: true
      };

    case VIDEO_PLAYER_ACTION_AUTO_GO_NEXT:
      const atLastVid = isAtLastVid();
      
      if ( atLastVid ) {
        action.jumpToNextThingCallback()
        return state;
      }

      return {
        ...state,
        activeIndex: activeIndex + 1,
        autoPlay: true
      };
  
    default:  throw new Error();
  }
}

