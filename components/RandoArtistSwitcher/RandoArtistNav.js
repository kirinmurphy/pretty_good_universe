import styled from "styled-components";
import { marqueeBreakpoint } from "./RandoArtistProfile";

export function RandoArtistNav (props) {  
  const { 
    setNewArtist, 
    setNewRelatedArtist, 
    relatedArtistList, 
    currentArtistName 
  } = props;

  return (
    <SiteHeaderWrapper>
      <strong>LOGO THING</strong>
      <RandorArtistNavWrapper>
        <span 
          className="link" 
          onClick={setNewArtist}>
            new orbit
        </span>

        {!!relatedArtistList.length && (
          <>
            <span>{' | '}</span>
            <span 
              className="link" 
              onClick={setNewRelatedArtist}
            >
              more like {currentArtistName}
            </span>          
          </>                
        )}
      </RandorArtistNavWrapper>
    </SiteHeaderWrapper>
  )
}

const SiteHeaderWrapper = styled.div`
  padding-bottom: 1.5vw;
  margin-bottom: 1vw;
  display:flex;
  flex-direction: row;
  border-bottom: 1px solid #333;

  &:first-of-type {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: ${marqueeBreakpoint}) {
    position:fixed;
    background: #024;
    bottom:0; 
    left:0; 
    right:0;
    padding:0 1rem;


    strong,
    > div > span {
      margin:0;
      padding:1rem .5rem;
    }

    strong { 
      padding-left: 0; 
      transform: translateY(2px);
    }
  }

`;

const RandorArtistNavWrapper = styled.div`
  margin-bottom: .25rem;

  &:after {
    content: "";
    clear: both;
    display: block;
  }    

  > * { float:right;
    padding: 0 .5rem; 

    &:first-of-type { padding-right: 0; }
  }
`;
