export const VIDEO_PLAYER_INIT = 'initVideo'; 
export const VIDEO_PLAYER_ACTION_BACK = 'back';
export const VIDEO_PLAYER_ACTION_NEXT = 'next';

export function videoPlayerReducer (state, action) {
  const { activeIndex } = state;

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
      const atLastVid = activeIndex === action.videoCount - 1;
      
      const newNextIndex = atLastVid ? 0 : activeIndex + 1;
      return {
        ...state,
        activeIndex: newNextIndex,
        autoPlay: true
      };

    default:  throw new Error();
  }
}

