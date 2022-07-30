import { useState } from "react";
import { MobileView } from "react-device-detect";
import styled from "styled-components";

export function MobileNoticerThing () {
  const [noticerIsVisible, setNoticerIsVisible] = useState(true);

  return noticerIsVisible ? (
    <MobileView>
      <MobileNoticerWrapper onClick={() => setNoticerIsVisible(false)}>
        <div class="inner">
          <p>Thanks for checking out my music page!</p>

          <p>
            Still needs some work on mobile, the desktop experience is much better. 
          </p>

          <p>
            You should probably go check it out now before you forget.    
          </p>

          <p>
            Unless you're driving or something, then maybe stop reading this.    
          </p>


          <p>
            If you'd still like to check it out here, tap anywhere to close this message.    
          </p>
        </div>
      </MobileNoticerWrapper>
    </MobileView>
  ) : <></>;
}

const MobileNoticerWrapper = styled.div`
  background: #365;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index:1000000;
  padding: 6vw 4vw;

  > .inner {
    max-width: 500px;
    margin: 0 auto;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;
