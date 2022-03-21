import styled from 'styled-components';

export const YoutubePlayerWrapper = styled.div`
  max-width:800px;
  margin-left: auto;
  margin-right: auto;
  padding-top:1rem;

  .video-wrapper { 
    border: 1px solid #222;
    position:relative;
    height:0; 
    padding:0 0 50% 0; 
    padding-top:40px; 
    overflow:hidden;
    background:#333;
  }

  iframe { 
    position:absolute;
    top:0; 
    left:0; 
    width:100%; 
    height:100%;
  }

  .video-actions { 
    display:flex;
    justify-content: space-between;
    background: #181818;
    
    > span { 
      padding:.5rem 1rem;
      text-transform:uppercase; 

      &:active,
      &:hover:active { 
        &, 
        .svg-inline--fa {
          font-weight:bold; 
        }
      }

      .svg-inline--fa {
        font-size: 3rem;
      }

      &.next {
        display: flex;
        align-items: center;
        .svg-inline--fa { 
          padding-left: .5rem; 
        }
      }
    }
  }
`;
