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
    text-align:right;
    /* display:flex;
    justify-content: right; */
    background: #181818;
    
    > span { 
      display:inline-block;
      padding:.375rem .75rem;
      text-transform:uppercase; 

      &:active,
      &:hover:active { 
        &, 
        .svg-inline--fa {
          font-weight:bold; 
        }
      }

      .svg-inline--fa {
        font-size: 2.5rem;
      }

      &.next {
        padding-right:1.25rem;
      }
    }
  }
`;
