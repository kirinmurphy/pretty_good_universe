import styled from "styled-components";

export function Contact () {
  return (
    <ContactPaneWrapper>

      <p>Hey there, <br/>
      Thanks for checking out my music website thing.  
      </p>
      <p>
      Hit me up if you’d like to collab on music website things.  <br/>

      Or if you just wanna talk about music.<br/> Or websites. 
      </p>

      <p>
      Sometimes also I go to places and play music. If you’ve got a place to play music let’s talk.  More party vibes <a href="//www.mixcloud.com/millenium_breakdown/">here</a>.
      </p>
      <p>
        {/* <a href="//www.instagram.com/prettygooduniverse/">Instagram</a>
        &nbsp;&nbsp;&middot;&nbsp;&nbsp; 
        <a href="mailto: */}
        codethingsdotnet@gmail.com
        {/*">Email</a> */}

      </p>
    </ContactPaneWrapper>
  )
}

const ContactPaneWrapper = styled.div`
  background: rgba(255, 255, 255, .1);
  max-width:480px; 
  margin: 10vh auto 2vh auto;
  padding: 3rem;

  p {
    margin-bottom: 1.5rem; 
    &:last-of-type { margin-bottom: 0; }
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  gap: 1rem;
`;