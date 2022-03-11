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
        className="link--inverted" 
        onClick={setNewArtist}>
          Next Artist
      </span>

      {!!relatedArtistList.length && (
        <span 
          className="link--inverted" 
          onClick={setNewRelatedArtist}
        >
          More like {currentArtistName}
        </span>
      )}
    </RandorArtistNavWrapper>
  )
}

const RandorArtistNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;