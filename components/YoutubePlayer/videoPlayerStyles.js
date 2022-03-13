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
      display:inline-block; 
      padding:.75rem 1.5rem 1.5rem 1.5rem;
      text-transform:uppercase; 
      font-size:1rem; 

      &:active,
      &:hover:active { 
        &, 
        .svg-inline--fa {
          font-weight:bold; 
        }
      }

      span {
        display: inline-block;
        transform: translateY(5px);
      }

      .svg-inline--fa {
        display:inline-block;
        position:relative; 
        transform: scale(2);
        transform-origin:center center;
      }

      &.back {
        flex:0 0 2.5rem;
        .svg-inline--fa {
          top:6px;
          width:.6rem;
        }
      }

      &.next {
        flex: 0 0 170px;
        text-align:right;
        .svg-inline--fa { 
          top:5px;
          width:1.2rem;
          padding-left:10px; 
        }
      }
    }
  }
`;
