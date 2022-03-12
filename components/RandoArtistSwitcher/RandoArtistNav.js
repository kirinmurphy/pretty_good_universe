import styled from "styled-components";

export function RandoArtistNav (props) {  
  const { 
    setNewArtist, 
    setNewRelatedArtist, 
    relatedArtistList, 
    currentArtistName 
  } = props;

  return (
    <RandorArtistNavWrapper>
      <span 
        className="link" 
        onClick={setNewArtist}>
          New Orbit
      </span>

      {!!relatedArtistList.length && (
        <span 
          className="link" 
          onClick={setNewRelatedArtist}
        >
          More like {currentArtistName}
        </span>
      )}
    </RandorArtistNavWrapper>
  )
}

const RandorArtistNavWrapper = styled.div`
  margin-bottom: .25rem;

  &:after {
    content: "";
    clear: both;
    display: block;
  }    

  > * { float:right; 

    &:first-of-type { margin-left: 1rem; }
  }
`;
