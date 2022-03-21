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
      <strong>pretty good universe</strong>
      <div className="nav-wrapper">
        <span 
          className="link" 
          onClick={setNewArtist}>
            new thing
        </span>

        {!!relatedArtistList.length && (
          <>
            <span>{' | '}</span>
            <span 
              className="link related-artist-link" 
              onClick={setNewRelatedArtist}
            >
              more like {currentArtistName}
            </span>          
          </>                
        )}
      </div>
    </SiteHeaderWrapper>
  )
}

const SiteHeaderWrapper = styled.div`
  display:flex;
  flex-direction: row;
  padding-bottom: 1.5vw;
  margin-bottom: 1vw;
  border-bottom: 1px solid #333;

  &:first-of-type {
    display: flex;
    justify-content: space-between;
  }

  .nav-wrapper {
    margin-bottom: .25rem;

    &:after {
      content: "";
      clear: both;
      display: block;
    }    

    > * { float:right;

      &:first-of-type { padding-right: 0; }
    }

    .related-artist-link {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @media (min-width: 521px) { max-width: 40vw; } 
      @media (max-width: 520px) { max-width: 60vw; } 
    }
  }

  @media (max-width: ${marqueeBreakpoint}) {
    position:fixed;
    background: #222832;
    z-index:100;
    bottom:0; 
    left:0; 
    right:0;
    min-width: 320px;
    padding:0 1rem;
    margin-bottom: 0;

    .nav-wrapper {
      margin-bottom: 0;
    }

    strong,
    .nav-wrapper > span {
      margin:0;
      padding: .75rem .5rem;
    }

    strong { 
      padding-left: 0; 
      transform: translateY(1px);
    }
  }

  @media (max-width: 520px)  { 
    strong { display:none; }
    > div { width:100%; }
        
  } 
`;
