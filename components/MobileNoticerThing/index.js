import { MobileView } from "react-device-detect";
import styled from "styled-components";

export function MobileNoticerThing () {
  return (
    <MobileView>
      <MobileNoticerWrapper>
        <div class="inner">
          <p>Thanks for checking out our music page.</p>

          <p>
            Don't yet have autoplay working on mobile, but you can check it out on desktop for continuous playback. 
          </p>
        </div>
      </MobileNoticerWrapper>
    </MobileView>
  );
}

const MobileNoticerWrapper = styled.div`
  background: #254;
  padding: 1rem;

  > .inner {
    max-width: 500px;
    margin: 0 auto;
  }

  p {
    margin-bottom: .75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
